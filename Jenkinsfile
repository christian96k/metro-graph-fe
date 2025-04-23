pipeline {
    agent any

    environment {
        IMAGE_NAME = 'metro-graph-frontend'
        IMAGE_TAG = 'latest'
        REGISTRY = 'docker.io'
        REGISTRY_CREDENTIALS = 'docker-hub-id'
        FULL_IMAGE_NAME = "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
    }

    triggers {
        // Solo se non hai un webhook GitHub, altrimenti rimuovi questa parte
        pollSCM('H/2 * * * *')
    }

    stages {

        stage('Build Image from Dockerfile') {
            steps {
                script {
                    // Verifica la versione di Docker
                    def dockerVersion = sh(script: 'docker --version', returnStdout: true).trim()
                    echo "Docker Version: ${dockerVersion}"

                    // Costruisci l'immagine direttamente dal Dockerfile
                    sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }

        stage('Tag & Push Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry("https://${REGISTRY}", REGISTRY_CREDENTIALS) {
                        sh "docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${FULL_IMAGE_NAME}"
                        sh "docker push ${FULL_IMAGE_NAME}"
                    }
                }
            }
        }

        stage('Deploy on Local VM') {
            steps {
                script {
                    // Esegui il deploy sulla stessa macchina (senza SSH)
                    sh """
                        cd /home/root/metro-graph-fe &&
                        git pull origin dev &&
                        docker pull ${FULL_IMAGE_NAME} &&
                        docker-compose up -d
                    """
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
