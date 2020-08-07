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
           agent{
             docker{
               image 'desiby/docker-nodeapp'
               registryCredentialsId 'dockerhub'
               registryUrl 'https://registry.hub.docker.com'
             }
           }
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
