pipeline {
    environment { 
        registry = "desiby/docker-nodeapp"
        registryCredential = 'dockerhub' 
    } 
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
                docker.withRegistry('', registryCredential) {
                   def img = docker.build registry + ":$BUILD_NUMBER"
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
