node {
      stage("build and push image"){
        docker.withRegistry("https://index.docker.io/v1", "dockerhub"){  
          def image = docker.build 'desiby/docker-nodeapp'
            image.push()
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
      