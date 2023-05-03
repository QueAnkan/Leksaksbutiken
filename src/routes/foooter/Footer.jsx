import './Footer.css'


const Footer = () => {

	return (
		<footer>
			<h3>Lek och bad</h3>
			<div>
				<h4>Om företaget</h4>
				<p> Lageradress: Bromsgatan 16 <br/>
					Postadress: box 4152 <br/>
					652 23 Karlstad <br/>
					orgnr. 123123-4545
				</p>	
			</div>
			<div>
				<h4>Kontakta oss</h4>
				<p> Kundtjänst vardagar 10-16<br/>
					tel. 073-9239230<br/>
					info@lekochbad.se<br/>
				</p>
				{/*  soc- ikoner ska in här nedan */}
			<div> ikon ikon</div>
			</div>
			{/* ev andra ikoner in här */}
  			<div> företagsikoner </div>

		</footer>
	)
}

export default Footer