pipeline {
    agent any

    environment {
        IMAGE_NAME = 'metro-graph-frontend'
        IMAGE_TAG = 'latest'
        REGISTRY = 'docker.io'
        REGISTRY_CREDENTIALS = 'docker-hub-id'
        VM_SSH_CREDENTIALS = 'ssh-id'
        VM_IP = '64.227.68.251'
        FULL_IMAGE_NAME = "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
    }

    triggers {
        // Solo se non hai un webhook GitHub, altrimenti rimuovi questa parte
        pollSCM('H/2 * * * *')
    }

    stages {

        stage('Build Image via Docker Compose') {
            steps {
                script {
                    // Verifica la versione di Docker
                    def dockerVersion = sh(script: 'docker --version', returnStdout: true).trim()
                    echo "Docker Version: ${dockerVersion}"

                    if (dockerVersion.contains('20.') || dockerVersion.contains('19.')) {
                        // Docker 20.10+ supporta il comando senza trattino
                        sh 'docker compose -f docker-compose.yml build'
                    } else {
                        // Docker <20.10 usa il trattino
                        sh 'docker-compose -f docker-compose.yml build'
                    }
                }
            }
        }

        stage('Tag & Push Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry("https://${REGISTRY}", REGISTRY_CREDENTIALS) {
                        sh "docker tag metro-graph-frontend:latest ${FULL_IMAGE_NAME}"
                        sh "docker push ${FULL_IMAGE_NAME}"
                    }
                }
            }
        }

        stage('Deploy on Remote VM') {
            steps {
                script {
                    sshagent([VM_SSH_CREDENTIALS]) {
                        sh """
                            ssh root@${VM_IP} '
                                cd /home/root/metro-graph-fe &&
                                git pull origin dev &&
                                docker-compose pull &&
                                docker-compose up -d --build
                            '
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
