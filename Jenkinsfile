pipeline {
    agent none
    
    stages {
        stage('Build'){
          agent { dockerfile true }    
            steps {
                echo 'building docker image..'
            }
        }
    }
    post {
       success {
          echo 'build successful!'
       }
       unsuccessful {
          echo 'failed'
       } 
    }
}
