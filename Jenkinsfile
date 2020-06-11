pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 9000:9000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        
        stage('Deliver') {
            steps {
                sh './deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './kill.sh'
            }
        }
    }
}
