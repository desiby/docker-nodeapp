pipeline {
     agent any
   stages { 
      stage('build image') {
         steps {
            def image = docker.build 'desiby/docker-nodeapp'
            image.push
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