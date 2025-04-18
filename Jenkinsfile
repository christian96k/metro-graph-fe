pipeline {
    agent any

    environment {
        IMAGE_NAME = 'metro-graph-frontend'
        IMAGE_TAG = 'latest'
        REGISTRY = 'docker.io'
        REGISTRY_CREDENTIALS = 'docker-hub-id'
        GITHUB_CREDENTIALS = 'github-id'
        VM_SSH_CREDENTIALS = 'ssh-id'
        VM_IP = '64.227.68.251'
        FULL_IMAGE_NAME = "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
    }

    triggers {
        // Usa webhook GitHub se possibile per trigger immediato
        pollSCM('* * * * *')
    }

    stages {
        stage('Checkout Repo') {
            steps {
                git credentialsId: "${GITHUB_CREDENTIALS}", branch: 'dev', url: 'https://github.com/christian96k/metro-graph-fe.git'
            }
        }

        stage('Build Image via Docker Compose') {
            steps {
                script {
                    // Esegui docker-compose build, il file è nel repo
                    sh 'docker compose -f docker-compose.yml build'
                }
            }
        }

        stage('Tag & Push Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry("https://${REGISTRY}", REGISTRY_CREDENTIALS) {
                        // Tagga l'immagine (assicurati che la compose la crei col nome corretto)
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
                                docker compose pull &&
                                docker compose up -d
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
