pipeline {
    agent {
        docker {
            image 'node:slim'
            args '-p 3000:3000'
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
