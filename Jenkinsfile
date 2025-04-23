pipeline {
    agent any

    environment {
        IMAGE_NAME = 'metro-graph-frontend'
        IMAGE_TAG = 'latest'
        REGISTRY = 'docker.io'
        REGISTRY_CREDENTIALS = 'docker-hub-id'
        FULL_IMAGE_NAME = "christian96k/${IMAGE_NAME}:${IMAGE_TAG}"
    }

    triggers {
        // Solo se non usi un webhook, rimuovilo se ce l'hai
        // pollSCM('H/2 * * * *')
    }

    stages {

        stage('Checkout') {
            steps {
                git credentialsId: 'github-id',
                    branch: 'dev',
                    url: 'https://github.com/christian96k/metro-graph-fe.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${FULL_IMAGE_NAME} ."
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry("https://${REGISTRY}", REGISTRY_CREDENTIALS) {
                        sh "docker push ${FULL_IMAGE_NAME}"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh '''
                        docker pull ${FULL_IMAGE_NAME}
                        docker stop metro-graph-frontend || true
                        docker rm metro-graph-frontend || true
                        docker run -d --name metro-graph-frontend -p 5173:5173 ${FULL_IMAGE_NAME}
                    '''
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
