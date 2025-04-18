pipeline {
    agent any

    environment {
        IMAGE_NAME = 'metro-graph-frontend'
        IMAGE_TAG = 'latest'
        REGISTRY = 'docker.io'
        REGISTRY_CREDENTIALS = 'docker-hub-id'         // Credenziali Docker Hub
        GITHUB_CREDENTIALS = 'github-id'               // Credenziali GitHub
        VM_SSH_CREDENTIALS = 'ssh-id'                  // SSH key registrata su Jenkins
        VM_IP = '64.227.68.251'                        // IP della VM
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

        stage('Deploy on Remote VM via Docker Compose') {
            steps {
                script {
                    sshagent([VM_SSH_CREDENTIALS]) {
                        // Sulla VM: fai il pull dell'immagine aggiornata e avvia con docker-compose
                        sh """
                            ssh root@${VM_IP} '
                                docker pull ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} &&
                                docker-compose -f /home/root/dockerfiles/docker-compose.yml up -d
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
