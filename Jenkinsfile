pipeline {
    agent any

    environment {
        IMAGE_NAME = 'metro-graph-frontend'
        IMAGE_TAG = 'latest'
        REGISTRY = 'docker.io'
        REGISTRY_CREDENTIALS = 'docker-hub-id'         // Credenziali Docker Hub
        GITHUB_CREDENTIALS = 'github-id'               // Credenziali GitHub
        VM_SSH_CREDENTIALS = 'ssh-id'                  // SSH key registrata su Jenkins (se necessario)
        VM_IP = '64.227.68.251'                        // IP della VM
        DOCKER_HUB_USERNAME = credentials('docker-hub-username')   // Username Docker Hub (credenziale Jenkins)
        DOCKER_HUB_PASSWORD = credentials('docker-hub-password')   // Password Docker Hub (credenziale Jenkins)
    }

    stages {
        stage('Checkout from GitHub') {
            steps {
                git credentialsId: "${GITHUB_CREDENTIALS}", branch: 'dev', url: 'https://github.com/christian96k/metro-graph-fe.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://${REGISTRY}", REGISTRY_CREDENTIALS) {
                        def appImage = docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                        appImage.push()
                    }
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    // Effettua il login a Docker Hub
                    sh """
                        echo \$DOCKER_HUB_PASSWORD | docker login -u \$DOCKER_HUB_USERNAME --password-stdin
                    """
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    // Vai nella cartella con il docker-compose.yml
                    sh """
                        cd /home/root/dockerfiles && 
                        docker-compose pull &&
                        docker-compose up -d
                    """
                }
            }
        }
    }

    post {
        always {
            // Spostato il cleanWs all'interno del nodo
            cleanWs() // Pulisce l'ambiente di lavoro dopo ogni esecuzione
        }
    }
}
