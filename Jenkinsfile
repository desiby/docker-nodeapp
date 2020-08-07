pipeline {
    agent none
    
    stages {
        stage('Build'){
          agent { dockerfile true }    
            steps {
                echo 'building docker image..'
            }
        }
        
        stage('Push'){
          agent any
            steps{
               script{
                docker.withRegistry('https://https://index.docker.io/', 'dockerhub') {
                   def img = docker.build("desiby/docker-nodeapp")
                   img.push()
                }
             }
            }
       }
    }
    post {
         success{
              echo 'success'
         }
       
       unsuccessful {
          echo 'failed'
       } 
    }
}
