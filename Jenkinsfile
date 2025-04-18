pipeline {
    agent any

    environment {
        IMAGE_NAME = 'metro-graph-frontend'
        IMAGE_TAG = 'latest'
        REGISTRY = 'docker.io'
        REGISTRY_CREDENTIALS = '38ed19f2-075f-4f68-bb44-bc4179e8ad4e'  // Credenziali Docker Hub
        GITHUB_CREDENTIALS = 'c7c14c40-cd6b-4037-b3b3-db921eb74339'  // Credenziali GitHub
        VM_SSH_CREDENTIALS = 'ssh-metro-graph-id'  // Credenziali SSH per la VM
        VM_IP = '64.227.68.251'  // IP della tua VM
        VM_DOCKER_COMPOSE_PATH = '/home/root/dockerfiles/docker-compose.yml'  // Percorso dove si trova docker-compose.yml sulla VM
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: "${GITHUB_CREDENTIALS}", branch: 'dev', url: 'https://github.com/christian96k/metro-graph-fe.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Costruisci l'immagine Docker
                    docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                }
            }
        }

        stage('Push to Docker Registry') {
            steps {
                script {
                    // Usa le credenziali per Docker Hub e push l'immagine
                    docker.withRegistry("https://${REGISTRY}", REGISTRY_CREDENTIALS) {
                        docker.image("${IMAGE_NAME}:${IMAGE_TAG}").push()
                    }
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                script {
                    // Usa ssh-agent per copiare e eseguire il docker-compose sulla VM
                    sshagent([VM_SSH_CREDENTIALS]) {
                        // Copia il file docker-compose sulla VM
                        sh "scp dockerfiles/docker-compose.yml root@${VM_IP}:${VM_DOCKER_COMPOSE_PATH}"

                        // Esegui il docker-compose sulla VM
                        sh "ssh root@${VM_IP} 'cd /home/root/dockerfiles && docker-compose -f docker-compose.yml up -d --build'"
                    }
                }
            }
        }
    }

    post {
        always {
            // Pulisce l'area di lavoro dopo il deploy
            cleanWs()
        }
    }
}
