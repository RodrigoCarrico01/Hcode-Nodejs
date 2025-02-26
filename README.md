# ENGLISH

## NodeJS Course - Videos
*This "mini-project" focuses on video compression using Node.js and ffmpeg. Below are the steps required for the installation, configuration, and execution of the project.*

### Requirements
- Node.js and npm installed.
- ffmpeg version from 2019.
- Optional: nodemon (to facilitate development).

### Cloning the Project and Opening in VSCode
1. Open a terminal and navigate to the directory where you want to clone the project.
2. Run the following command to clone the repository: ```git clone <repository-url>``` *Replace <repository-url> with the actual URL of the GitHub repository.*
3. After cloning, navigate into the project folder: ```cd <project-folder>```
4. Open the project in Visual Studio Code. 


### ffmpeg Installation
1. Go to this website: ``https://www.videohelp.com/software/ffmpeg/old-versions``
2. Download the recommended ffmpeg version from 2019: `ffmpeg-20191126-59d264b-win64-static.zip`
3. Extract the downloaded zip file.
4. Copy the extracted folder (usually named  ``ffmpeg-20191126-59d264b-win64-static``) to the project directory.
5. Rename the folder to ffmpeg.

### Installing Dependencies
> In the project directory, run the following command to install dependencies:
```
npm install
```

## Configuration and Usage
*The main script is videos.js, which allows resizing videos to different resolutions (360p, 480p, and 720p).*

### Execution Syntax
```node videos <directory> <start video> <end video>``` 
- <directory>: The directory where the videos are located.
- <start video>: The number of the starting video in the sequence.
- <end video>: The number of the ending video in the sequence.

### Example Execution
```node videos ./src 1 1```
*This command will process the video 1.mp4 to 1.mp4 (i.e., the same) located in the ./src folder.*

### How videos.js Works
*The script uses the `child_process` module to invoke **ffmpeg** and resize videos. For each video, three new versions are created:*
- 720p
- 480p
- 360p
*The resized videos will be stored in the `./src/resultado` folder.*

#### Note 
*The file cp.js was created as a test to execute system commands in Node.js.*

_______________________________________________________________________

# PORTUGUÊS

## Curso NodeJS - Videos
*Este "mini projeto" foca-se na compressão de vídeos utilizando o Node.js e o ffmpeg. Aqui estão os passos necessários para a instalação, configuração e execução do projeto.*

### Requisitos
- Node.js e npm instalados.
- Versão do ffmpeg de 2019.
- Opcional: nodemon (para facilitar o desenvolvimento).

### Clonar o Projeto e Abrir no VSCode
1. Abra um terminal e navegue até ao diretório onde pretende clonar o projeto.
2. Execute o seguinte comando para clonar o repositório: ```git clone <repository-url>``` *Substitua <repository-url> pelo URL real do repositório GitHub.*
3. Após clonar, entre na pasta do projeto: ```cd <project-folder>```
4. Abra o projeto no Visual Studio Code.

### Instalação do ffmpeg
1. Entrar neste website: ``https://www.videohelp.com/software/ffmpeg/old-versions``
2. Descarregar a versão recomendada do ffmpeg de 2019: `ffmpeg-20191126-59d264b-win64-static.zip`
3. Extrair o ficheiro zip descarregado.
4. Copiar a pasta extraída (normalmente chamada ``ffmpeg-20191126-59d264b-win64-static``) para o diretório do projeto.
5. Renomear a pasta para ffmpeg.

### Instalação das Dependências
> No diretório do projeto, executar o seguinte comando para instalar as dependências:
```
npm install
```

## Configuração e Utilização
*O script principal é o videos.js, que permite redimensionar vídeos em diferentes resoluções (360p, 480p e 720p).*

### Sintaxe de Execução
```node videos <diretório> <vídeo inicial> <vídeo final>``` 
- <diretório>: O diretório onde estão localizados os vídeos.
- <vídeo inicial>: O número do vídeo inicial na sequência.
- <vídeo final>: O número do vídeo final na sequência.

### Exemplo de Execução
```node videos ./src 1 1```
*Este comando irá processar o vídeo 1.mp4 até ao 1.mp4 (ou seja, o mesmo) localizado na pasta ./src.*

### Funcionamento do Script videos.js
*O script utiliza o módulo `child_process` para invocar o **ffmpeg** e redimensionar vídeos. A cada vídeo, são criadas três novas versões:*
- 720p
- 480p
- 360p
*Os vídeos redimensionados serão armazenados na pasta `./src/resultado`.*

#### Nota 
*O ficheiro cp.js foi criado como teste para executar comandos de sistema no Node.js.*