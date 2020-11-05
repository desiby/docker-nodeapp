pipeline {
    
    environment { 
        registry = "desiby/docker-nodeapp"
        registryCredential = 'dockerhub' 
        tagVersion = ""
        
        def remote = [:]
        remote.name = 'test'
        remote.host = 'test.domain.com'
        remote.user = 'root'
        remote.password = 'password'
        remote.allowAnyHosts = true
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
             sshCommand remote: remote, command: "touch hello"
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
