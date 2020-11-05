pipeline {
    environment { 
        registry = "desiby/docker-nodeapp"
        registryCredential = 'dockerhub' 
        tagVersion = ""
        
    } 
    agent any
    
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
                    tagVersion = "$BUILD_NUMBER"
                }
             }
            }
       }
    }
    post {
         success{
              echo 'success'
              sh "ssh -i /home/dezbill/gh.pem ec2-user@34.227.176.192"
              sh "touch hellllo"
              
     
             
             
         }
       
       unsuccessful {
          echo 'failed'
       } 
    }
}
