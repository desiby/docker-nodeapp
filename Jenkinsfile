node {
        stage("build"){
          def image = docker.build 'desiby/docker-nodeapp'
            image.push()
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
      