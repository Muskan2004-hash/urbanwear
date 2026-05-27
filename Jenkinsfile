pipeline {
    agent any

    stages {

        stage('Deploy To App Server') {
            steps {

                sshagent(['app-server-key']) {

                    sh '''
                    ssh -o StrictHostKeyChecking=no root@44.222.148.139 "

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
