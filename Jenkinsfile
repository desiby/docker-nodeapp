pipeline {
    agent {
        docker {
            image 'node:slim' 
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
