pipeline {
    
    environment { 
        registry = "desiby/docker-nodeapp"
        registryCredential = 'dockerhub' 
        tagVersion = ""
        
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
                    tagVersion = "$BUILD_NUMBER"
                }
             }
            }
       }

       stage('Deploy on Kubernetes cluster'){
          agent any
            steps{
            def remote = [:]
            remote.name = 'ip-172-31-95-164.ec2.internal'
            remote.host = '34.227.25.106'
            remote.user = 'ec2-user'
            remote.password = 'qwerty'
            remote.allowAnyHosts = true
            
                sshCommand remote: remote, command: "touch hello"
            }

       }

       stage('Remove Unused docker image') {
         agent any
           steps{
                sh "docker rmi $registry:$BUILD_NUMBER"
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
