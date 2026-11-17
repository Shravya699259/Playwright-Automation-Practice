pipeline{
    agent any
    stages {
        
        
        stage('Run Tests'){
            parallel{
                stage('Shard1'){
                    agent {
                        label 'machine'
                    }
                    steps{
                        checkout scm
                        bat 'npm ci'
                        bat 'npx playwright install chromium'
                        bat 'npx playwright test ==shard=1/4'
                    }
                }
                stage('Shard2'){
                    agent {
                        label 'machine'
                    }
                    steps{
                        checkout scm
                        bat 'npm ci'
                        bat 'npx playwright install chromium'
                        bat 'npx playwright test ==shard=2/4'
                    }
                }
            }
        }
    }
}