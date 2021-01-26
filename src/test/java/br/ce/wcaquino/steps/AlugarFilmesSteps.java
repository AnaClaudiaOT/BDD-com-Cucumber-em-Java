package br.ce.wcaquino.steps;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import org.junit.Assert;

import br.ce.wcaquino.entidades.Filme;
import br.ce.wcaquino.entidades.NotaAluguel;
import br.ce.wcaquino.entidades.TipoAluguel;
import br.ce.wcaquino.servicos.AluguelService;
import br.ce.wcaquino.utils.DateUtils;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AlugarFilmesSteps {

	private Filme filme;
	private AluguelService aluguel = new AluguelService();
	private NotaAluguel nota;
	private String erro;
	private TipoAluguel tipoAluguel;

	@Given("^um filme com estoque de (\\d+) unidades$")
	public void umFilmeComEstoqueDeUnidades(int arg1) throws Throwable {
		filme = new Filme();
		filme.setEstoque(arg1);
	}

	@Given("^que o preco do aluguel seja de R\\$ (\\d+)$")
	public void queOPrecoDoAluguelSejaDeR$(int arg1) throws Throwable {
		filme.setAluguel(arg1);
	}
	
	@Given("^um filme$")
	public void umFilme(DataTable table) throws Throwable {
	   Map<String, String> map = table.asMap(String.class, String.class);
	   filme = new Filme();
	   filme.setEstoque(Integer.parseInt(map.get("estoque")));
	   filme.setAluguel(Integer.parseInt(map.get("preco")));
	   String tipo = map.get("tipo");
	   tipoAluguel = tipo.equals("semanal")? TipoAluguel.SEMANAL: tipo.equals("extendido")? TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;
	}

	@When("^alugar$")
	public void alugar() throws Throwable {
		try {
			nota = aluguel.alugar(filme, tipoAluguel);
		} catch (RuntimeException e) {
			erro = e.getMessage();
		}
	}

	@Then("^o preco do aluguel sera de R\\$ (\\d+)$")
	public void oPrecoDoAluguelSeraDeR$(int arg1) throws Throwable {
		Assert.assertEquals(arg1, nota.getPreco());
	}

	@Then("^o estoque do filme sera (\\d+) unidade$")
	public void oEstoqueDoFilmeSeraUnidade(int arg1) throws Throwable {
		Assert.assertEquals(arg1, filme.getEstoque());
	}

	@Then("^nao sera possivel por falta de estoque$")
	public void naoSeraPossivelPorFaltaDeEstoque() throws Throwable {
		Assert.assertEquals("Filme sem estoque", erro);
	}

	@Given("^que o tipo do aluguel seja (.*)$")
	public void queOTipoDoAluguelSejaExtendido(String tipo) throws Throwable {
		tipoAluguel = tipo.equals("semanal")? TipoAluguel.SEMANAL: tipo.equals("extendido")? TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;
	}

	@Then("^a data de entrega sera em (\\d+) dias?$")
	public void aDataDeEntregaSeraEmDias(int arg1) throws Throwable {
		Date dataEsperada = DateUtils.obterDataDiferencaDias(arg1);
		Date dataReal = nota.getDataEntrega();

		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");

		Assert.assertEquals(format.format(dataEsperada), format.format(dataReal));
	}

	@Then("^a pontuacao sera de (\\d+) pontos$")
	public void aPontuacaoSeraDePontos(int arg1) throws Throwable {
		Assert.assertEquals(arg1, nota.getPontuacao());
	}

}
