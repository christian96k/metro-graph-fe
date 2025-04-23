pipeline {
    agent any

    environment {
        IMAGE_NAME = 'metro-graph-frontend'
        IMAGE_TAG = 'latest'  // Usa il tag che vuoi, es. 'latest' o una versione
        REGISTRY = 'docker.io'
        REGISTRY_CREDENTIALS = 'docker-hub-username'  // Assicurati che queste siano corrette!
        GITHUB_CREDENTIALS = 'github-id'
        VM_IP = '64.227.68.251'  // IP della VM
    }

    stages {
        stage('Checkout from GitHub') {
            steps {
                git credentialsId: "${GITHUB_CREDENTIALS}", branch: 'dev', url: 'https://github.com/christian96k/metro-graph-fe.git'
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://${REGISTRY}", "${REGISTRY_CREDENTIALS}") {
                        // Costruisci l'immagine Docker
                        def appImage = docker.build("christian96k/${IMAGE_NAME}:${IMAGE_TAG}")
                        // Fai il push dell'immagine al Docker Hub
                        appImage.push("${IMAGE_TAG}")
                    }
                }
            }
        }

        stage('Deploy on Remote VM via Docker Compose') {
            steps {
                script {
                    // Esegui il pull dell'immagine sulla macchina locale (dove gira Jenkins) e avvia con Docker Compose
                    sh """
                        docker pull christian96k/${IMAGE_NAME}:${IMAGE_TAG}
                        docker-compose -f /home/root/dockerfiles/docker-compose.yml up -d
                    """
                }
            }
        }
    }

    post {
        always {
            // Pulisce l'ambiente di lavoro (necessario dentro un blocco node)
            node {
                cleanWs()
            }
        }
    }
}
