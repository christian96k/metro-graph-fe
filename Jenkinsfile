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
        // Webhook GitHub (verifica il push)
        pollSCM('H/2 * * * *')  // Puoi rimuovere questa parte se usi un webhook GitHub
    }

    stages {

        // Stage 1: Notifica di ricezione del push da GitHub
        stage('GitHub Push Notification') {
            steps {
                echo "Pipeline triggered by GitHub push."
            }
        }

        // Stage 2: Pull del progetto e build dell'immagine dal Dockerfile
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

        // Stage 3: Tag dell'immagine e push su Docker Hub
        stage('Tag & Push Image to Docker Hub') {
            steps {
                script {
                    // Pusha l'immagine su Docker Hub solo se la build è riuscita
                    docker.withRegistry("https://${REGISTRY}", REGISTRY_CREDENTIALS) {
                        sh "docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${FULL_IMAGE_NAME}"
                        sh "docker push ${FULL_IMAGE_NAME}"
                    }
                }
            }
        }

        // Stage 4: Rimuovi l'immagine locale dopo il push
        stage('Remove Local Image') {
            steps {
                script {
                    // Rimuovi l'immagine locale dopo il push al registry
                    sh "docker rmi ${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }

        // Stage 5: Deploy dell'immagine sulla VM tramite Docker Compose
        stage('Deploy on Local VM via Docker Compose') {
            steps {
                script {
                    // Pull dell'immagine sulla stessa macchina e avvio con Docker Compose
                    sh """
                        cd /root/dockerfiles &&
                        docker pull ${FULL_IMAGE_NAME} &&
                        docker-compose up -d
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs() // Pulizia dell'ambiente di lavoro dopo la pipeline
        }
    }
}
