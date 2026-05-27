pipeline {
    agent any

    stages {

        stage('Deploy To App Server') {
            steps {

                sshagent(['app-server-key']) {

                    sh '''
                    ssh -o StrictHostKeyChecking=no root@44.220.82.25 "
                    cd ~/urbanwear &&
                    git pull origin main &&
                    docker compose down &&
                    docker compose up -d --build
                    "
                    '''
                }
            }
        }
    }
}

