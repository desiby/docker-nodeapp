node {
      checkout scm
      def image
      
      stage("cleanup"){
          try{     
                sh 'chmod a+x cleanup.sh'
                sh './cleanup.sh'
                
          }catch (exc){
             echo exc
          }
      }
   
      stage("build image"){
          try{  
            image = docker.build 'desiby/docker-nodeapp'
          }catch (exc){
             echo exc
          }
      }
      

      stage("push image"){
         try{
               docker.withRegistry('https://index.docker.io/v1/', 'dockerhub'){  
               image.push()
            }
         }
         catch (exc){
            echo exc
         }
      }
      
      stage("run a pod"){
          try{
              ansiblePlaybook credentialsId: 'kube', inventory: '/etc/ansible/hosts', playbook: 'playbook.yml'   
          }catch (exc){
             echo exc
          }
      }
      
}
      
