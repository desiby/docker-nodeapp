def remote = [name: 'ip-172-31-95-164.ec2.internal', host: '18.212.19.131', user: 'ec2-user', 
password: 'qwerty', allowAnyHosts: true]

pipeline {
    
    environment { 
        registry = "desiby/docker-nodeapp"
        registryCredential = 'dockerhub' 
        tagVersion = ""

    } 
    agent any
    
    stages {
        //build docker image
        stage('Build'){
          agent { dockerfile true }    
            steps {
                echo 'building docker image..'
            }
        }
        //push docker image to dockerhub registry
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
       // deploy new build on kubernetes cluster via ssh
       stage('Deploy on Kubernetes') {
   
            steps {
                script{
                   sshCommand remote: remote, 
                   command: "kubectl set image deployment nodedep docker-nodeapp=$registry:$tagVersion"
                }
            }
       }

    }
    //remove old build
    post {
         success{
              //sh "docker rmi $registry:$BUILD_NUMBER"
              sh "SUCCESS!!!"    
         }
       
       unsuccessful {
          echo 'failed'
       } 
    }
}
