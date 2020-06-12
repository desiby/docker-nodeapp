pipeline {
     node{
        def image = docker.build 'desiby/docker-nodeapp'
            image.push()
     }
      stages { 
         stage('build image') {
            steps {
               
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