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
         success{
             script{
                def img = docker.build("desiby/docker-nodeapp")
                img.push()
             }
         }
       
       unsuccessful {
          echo 'failed'
       } 
    }
}
