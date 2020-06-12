node {
      stage("build and push image"){
        docker.withRegistry([ credentialsId: "dockerhub", url: "https://index.docker.io/v1"]){  
          def image = docker.build 'desiby/docker-nodeapp:1.0'
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
      