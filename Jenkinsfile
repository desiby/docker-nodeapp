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
    }
    post {
         success{
              echo 'success'
              def remote = [:]
              remote.name = "master"
              remote.host = "34.227.176.192"
              remote.allowAnyHosts = true
              withCredentials([sshUserPrivateKey(credentialsId: 'myssh-cred', passphraseVariable: '', usernameVariable: 'userName')]) {
              remote.user = userName
              stage("SSH Steps Rocks!") {
              sshCommand remote: remote, command: 'touch hello'
             
        }
    } 
             
             
         }
       
       unsuccessful {
          echo 'failed'
       } 
    }
}
