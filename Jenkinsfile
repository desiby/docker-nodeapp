pipeline {
   agent any
     stages { 

      stage('build image') {
         steps {
            sh "chmod +x cleanup.sh"
            sh "./cleanup.sh"
            sh "docker image ls"
            sh "docker build -t desiby/docker-nodeapp ."
            sh "docker image ls"
         }
      }
     }
      post {
         success {
            echo "build succedeed :)"
         }
         failure {
            echo "build failed :("
         }
      }
}