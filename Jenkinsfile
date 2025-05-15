pipeline {
    agent any

    environment {
        IMAGE_NAME = 'metro-graph-frontend'
        IMAGE_TAG = 'latest'
        REGISTRY_CREDENTIALS = 'docker-hub-id' // Usa le credenziali Jenkins per Docker Hub
        DOCKER_USERNAME = 'christian96k' // Nome utente Docker Hub
        FULL_IMAGE_NAME = "${DOCKER_USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}" // Non è necessario specificare docker.io
    }

    stages {

        // Stage 1: Pull del progetto e build dell'immagine dal Dockerfile
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

        // Stage 2: Login su Docker Hub e push dell'immagine
        stage('Login & Push to Docker Hub') {
            steps {
                script {
                    // Login su Docker Hub con le credenziali di Jenkins
                    withCredentials([usernamePassword(credentialsId: REGISTRY_CREDENTIALS, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin"
                    }

                    // Tag dell'immagine con il nome completo
                    sh "docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${FULL_IMAGE_NAME}"

                    // Push dell'immagine su Docker Hub
                    sh "docker push ${FULL_IMAGE_NAME}"
                }
            }
        }


        // Stage 3: Remove All Local unused Images
        stage('Remove Local untagged local Images') {
            steps {
                script {
                    sh '''
                        # Rimuovi tutte le immagini con tag diverso da "latest" per il progetto specifico
                        docker images "${DOCKER_USERNAME}/${IMAGE_NAME}" --format "{{.ID}} {{.Tag}}" | \
                        grep -v "latest" | awk '{print $1}' | xargs -r docker rmi || true

                        # Rimuovi immagini con tag <none> ma con repository specifico
                        docker images --format "{{.Repository}} {{.Tag}} {{.ID}}" | \
                        grep "^${DOCKER_USERNAME}/${IMAGE_NAME} <none>" | awk '{print $3}' | xargs -r docker rmi || true

                        # Rimuovi tutte le immagini dangling (senza repo e tag)
                        docker images -f "dangling=true" -q | xargs -r docker rmi || true
                    '''
                }
            }
        }


         // Stage 4: Clean Docker Build Cache if >1GB
        stage('Clean Docker Build Cache if >1GB') {
            steps {
                script {
                    sh '''
                        cache_size=$(docker system df | grep "Build Cache" | tr -s ' ' | cut -d' ' -f5)
                        echo "Build cache size: $cache_size"

                        num=$(echo $cache_size | grep -o -E '[0-9.]+')
                        unit=$(echo $cache_size | grep -o -E '[A-Za-z]+')

                        case $unit in
                        GB) size_bytes=$(echo "$num * 1024 * 1024 * 1024" | bc) ;;
                        MB) size_bytes=$(echo "$num * 1024 * 1024" | bc) ;;
                        KB) size_bytes=$(echo "$num * 1024" | bc) ;;
                        B)  size_bytes=$num ;;
                        *)  size_bytes=0 ;;
                        esac

                        threshold=$((1 * 1024 * 1024 * 1024))

                        if [ "$(echo "$size_bytes > $threshold" | bc -l)" = "1" ]; then
                        echo "Build cache supera 1GB, pulisco..."
                        docker builder prune -f
                        else
                        echo "Build cache sotto 1GB, niente pulizia."
                        fi
                    '''
                }
            }
        }

        // Stage 5: Deploy dell'immagine sulla VM tramite Docker Compose
        stage('Deploy on Local VM via Docker Compose') {
            steps {
                script {
                    sh """
                        cd /dockerfiles &&
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
