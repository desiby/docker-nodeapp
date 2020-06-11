pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 5000:9000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
