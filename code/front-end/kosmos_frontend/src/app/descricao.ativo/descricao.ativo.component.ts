import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtivoService, Ativo } from '../service/ativo.service';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { Currency } from '../models/currency';
import { ActivatedRoute, Router } from '@angular/router';
import ApexCharts from 'apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from "ng-apexcharts";

@Component({
  selector: 'app-descricao.ativo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './descricao.ativo.component.html',
  styleUrls: ['./descricao.ativo.component.scss']
})
export class DescricaoAtivoComponent implements OnInit {
  ativo: Stock[] = [];
  quantidade = 1;
  page: number = 1;

  // Propriedades do gráfico
  public series: ApexAxisChartSeries = [];
  public chart: ApexChart = { type: 'area', height: 350 };
  public xaxis: ApexXAxis = { type: 'datetime' };
  public yaxis: ApexYAxis = {};
  public tooltip: ApexTooltip = {};
  public fill: ApexFill = {};
  public dataLabels: ApexDataLabels = { enabled: false };
  public markers: ApexMarkers = { size: 0 };
  public title: ApexTitleSubtitle = { text: '' };

  constructor(private ativoService: AtivoService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getAtivo();
  }

  getAtivo() {
    let nomeAtivo = this.route.snapshot.paramMap.get('nome') ?? '';

    this.ativoService.getAtivoByNome(nomeAtivo).subscribe(stock => {
      this.ativo = stock;
      console.log(this.ativo);
      this.getLoadChart(this.ativo[0].id);
    })
  }

    comprar(): void {
    //    if (this.ativo) {
    //      console.log(`Comprando ${this.quantidade} de ${this.ativo.nome} por ${this.ativo.precoAtual}`);
    //
    //    }
  }

  returnToInvest(): void {
    this.router.navigate(['invest']);
  }


getLoadChart(stockId: number) {
    this.ativoService.getTimeSeries(stockId).subscribe(info => {
      const currencyData = info.currency;
      //console.log(currencyData[0]);
      const sampledData = currencyData.filter((item, index) => index % 100 === 0);

      const seriesData = sampledData.map(item => {
        return {
          x: new Date(item.time).getTime(), // Converte a string de tempo para timestamp
          y: (item as any)['4. close'] // Usando o valor de fechamento
        };
      });

      console.log(seriesData);

       // Configurando as propriedades do gráfico
      this.series = [
        {
          name: "Preço de Fechamento",
          data: seriesData
        }
      ];

      this.chart = {
        type: "area",
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: "zoom"
        }
      };

      this.dataLabels = {
        enabled: false
      };

      this.markers = {
        size: 0
      };

      this.title = {
        text: "Variação do Preço de Fechamento",
        align: "left"
      };

      this.fill = {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      };

      this.yaxis = {
        labels: {
          formatter: function(val) {
            return val.toFixed(2);
          }
        },
        title: {
          text: "Preço"
        }
      };

      this.xaxis = {
        type: "datetime",
        labels: {
          datetimeUTC: false
        }
      };

      this.tooltip = {
        theme: "dark", // Define o tema como "dark", o que geralmente melhora a legibilidade
        style: {
          fontSize: '12px',
          fontFamily: 'Arial, sans-serif',
        },
        shared: false,
        x: {
          format: "dd MMM yyyy HH:mm"
        },
        y: {
          formatter: function(val) {
            return val.toFixed(2);
          }
        }
      };

      // Renderizando o gráfico
      const chart = new ApexCharts(document.querySelector("#chart"), {
        series: this.series,
        chart: this.chart,
        xaxis: this.xaxis,
        yaxis: this.yaxis,
        tooltip: this.tooltip,
        fill: this.fill,
        dataLabels: this.dataLabels,
        markers: this.markers,
        title: this.title
      });

      chart.render();
    });

  }


}
