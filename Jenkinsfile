node {
	stage 'Git Checkout'
		git url: 'https://github.com/treselle-workbench/node_service_poc.git'
	stage 'Build Docker Image'
		sh "sudo docker build -t node_service ."
	stage 'Run Docker Container'
		sh "sudo docker run --name node_service -p 3001:3001 -d node_service"
}
