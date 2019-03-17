import React, { Component } from "react";

class Rules extends React.Component {

    render() {
        return (
            <div>
                <div className="page-header">

                    <h2>Regler och stadgar</h2>
                </div>
                <div className="row">
                    <div className="col-sm-8 col-md-12 col-lg-12">
                        <p>
                            Enligt EU-fiskekommision finns det regler som måste följas när det gäller tävling.
		De tävlande skall träffas vid bryggan med spön, flöte, sänke och krok. Kastspön får användas samt reservkrokar.
		Fisket skall pågå i en timme och trettio minuter. Fisket bedrivs medsols och alla skall gå runt tjärnen.
		</p>
                        <p>
                            Poängräkningen är följande:
		</p>
                        <p>
                            <code>Aborre 1 poäng</code></p>
                        <p>
                            <code>Annan fisk 2 poäng</code></p>
                        <p>
                            Fisken medföres i plastpåse och räknas under uppsikt av fiskedomaren <mark>Kerstin Strandberg</mark>. Skulle poängen vara lika hos flera fiskare skall vikten avgöra.
		Var tionde minut ger fiskedomaren en signal och då måste varje fiskare göra en förflyttning.</p><p>
                            Ordföranden önskar god fiskelycka. Kom ihåg myggmedel!
		</p>
                        <p className="sign">
                            Axel Strandberg
		</p>
                        <small>PS. Som bete får användas mask, maggot och räka.</small>
                    </div>
                </div>
            </div>
        );
    }
}
export default Rules