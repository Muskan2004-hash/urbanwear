pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'git@github.com:Muskan2004-hash/urbanwear.git'
            }
        }

        stage('Build Docker Containers') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy Application') {
            steps {
                sh 'docker compose up -d'
            }
        }

    }
}
