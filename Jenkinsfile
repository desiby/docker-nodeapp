pipeline {
     agent any
     node{
        def image = docker.build 'desiby/docker-nodeapp'
            image.push()
     }
      stages { 
         stage('build image') {
            steps {
               sh "node --version"
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