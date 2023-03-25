<?php
	$area = $_POST['area'];
	$livro = $_POST['livro'];
	$usuario = $_POST['user'];
	$saudacao = "Olá";
	
		switch ($area) {
			case "analise":
				echo "<p>$saudacao, estas são as vagas de Analista disponíveis:</p>";
				echo "<ul>";
				echo "<li>Analista de Sistema</li>";
				echo "<li>Engenheiro de Software</li>";
				echo "</ul>";
				break;
			case "infraestrutura":
				echo "<p>$saudacao, estas são as vagas de Infraestrutura disponíveis:</p>";
				echo "<ul>";
				echo "<li>Analista de Redes</li>";
				echo "<li>Coordenador de Equipes</li>";
				echo "</ul>";
				break;
			case "desenvolvimento":
				echo "<p>$saudacao, estas são as vagas de Desenvolvimento disponíveis:</p>";
				echo "<ul>";
				echo "<li>Programação PHP</li>";
				echo "<li>Programação Python</li>";
				echo "</ul>";
				break;
			default:
				echo "<p>Por favor, selecione uma área de interesse.</p>";
		}

		switch ($usuario) {
			case "professor":
				echo "<p>$saudacao professor, você tem 10 dias para a entrega do livro.</p>";
				echo "<ul>";
				echo "<p>O livro que está sendo retirado é:</p>";
				echo "<li>$livro</li>";
				break;
			case "aluno":
				echo "<p>$saudacao aluno, você tem 3 dias para a entrega do livro.</p>";
				echo "<ul>";
				echo "<p>O livro que está sendo retirado é:</p>";
				echo "<li>$livro</li>";
				break;
			default:
				echo "<p>Por favor, selecione quem irá retirar o livro.</p>";
				break;
		}
		
	?>