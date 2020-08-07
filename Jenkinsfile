pipeline {
    agent none
    
    stages {
        stage('Build') { 
          agent { Dockerfile true } 
            steps {
                echo 'building docker image..'
            }
        }
    }
    post {
       sucess {
          echo 'build successful!'
       }
       unsuccessful {
          echo 'failed'
       } 
    }
}
