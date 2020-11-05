def remote = [name: 'ip-172-31-95-164.ec2.internal', host: '34.227.25.106', user: 'ec2-user', 
password: 'qwerty', allowAnyHosts: true]

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
       
       stage('SSH Declarative Example') {
   
            steps {
                script{
                   sshCommand remote: remote, 
                   command: "kubectl set image deployment nodedep docker-nodeapp=$registry:$tagVersion"
                }
            }
       }

    }
    post {
         success{
              echo 'success'
              sh "docker rmi $registry:$BUILD_NUMBER"
              
              
             
         }
       
       unsuccessful {
          echo 'failed'
       } 
    }
}
