<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Element Human - SSP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style id="compiled-css" type="text/css">
    #container {
        max-width: 1280px;
        max-height: 720px;
        min-height: 600px;
        margin: auto;
        background-color: #f4f4f4;
        border: 2px solid #333;
        border-radius: 15px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .highcharts-figure,
    .highcharts-data-table table {
        min-width: 360px;
        max-width: 1440px;
        min-height: 600px;
        margin: 1em auto;
    }

    #filters {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        gap: 20px;
        padding: 15px;
        margin-bottom: 20px;
    }

    #filters label {
        margin-right: 5px;
        font-weight: 500;
    }

    #filters select {
        padding: 5px;
        border-radius: 4px;
        border: 1px solid #ccc;
        min-width: 120px;
    }
    </style>
  </head>
  <body>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>

    <div id="filters">
        <div>
            <label for="Brand Category">Brand Category:</label>
            <select id="Brand Category">
                <option selected value> -- all -- </option>
            </select>
        </div>
        
        <div>
            <label for="Creator">Creator:</label>
            <select id="Creator">
                <option selected value> -- all -- </option>
            </select>
        </div>
        
        <div>
            <label for="Brand Name">Brand Name:</label>
            <select id="Brand Name">
                <option selected value> -- all -- </option>
            </select>
        </div>
        
        <div>
            <label for="Country">Country:</label>
            <select id="Country">
                <option selected value> -- all -- </option>
            </select>
        </div>
        
        <div>
            <label for="Month-Year">Month-Year:</label>
            <select id="Month-Year">
                <option selected value> -- all -- </option>
            </select>
        </div>
    </div>
  
    <figure class="highcharts-figure">
        <div id="container"></div>
    </figure>

    <script type="text/javascript">
    Highcharts.setOptions({
        colors: [
            'rgba(5,141,199,0.5)', 'rgba(80,180,50,0.5)', 'rgba(237,86,27,0.5)', 'rgba(210,105,30,0.5)'
        ]
    });

    const series = [{
            name: 'Instagram',
            id: 'Instagram',
            marker: {
                symbol: 'circle'
            }
        },
        {
            name: 'TikTok',
            id: 'TikTok',
            marker: {
                symbol: 'triangle'
            }
        },
        {
            name: 'Facebook',
            id: 'Facebook',
            marker: {
                symbol: 'square'
            }
        },
        {
            name: 'YouTube Shorts',
            id: 'YouTube Shorts',
            marker: {
                symbol: 'diamond'
            }
        }];

    const filters = [
        { id: 'Creator', type: 'select', options: [], value: null },
        { id: 'Brand Name', type: 'select', options: [], value: null },
        { id: 'Brand Category', type: 'select', options: [], value: null },
        { id: 'Country', type: 'select', options: [], value: null },
        { id: 'Month-Year', type: 'select', options: [], value: null }
    ];

    const data = [{"Creator":"Creative Cathy","Month-Year":"Sep-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Wacky Upstart Brand","Platform":"TikTok","Stopping Power":95.43,"Staying Power":89.67},{"Creator":"Influential Ike","Month-Year":"Sep-24","Country":"GB","Brand Category":"Entertainment and Streaming","Brand Name":"Wacky Upstart Brand","Platform":"YouTube Shorts","Stopping Power":73.56,"Staying Power":35.67},{"Creator":"Jacques Cousteau","Month-Year":"Sep-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Wacky Upstart Brand","Platform":"TikTok","Stopping Power":37.45,"Staying Power":30.12},{"Creator":"Influential Ike","Month-Year":"Sep-24","Country":"GB","Brand Category":"Entertainment and Streaming","Brand Name":"Wacky Upstart Brand","Platform":"YouTube Shorts","Stopping Power":84.51,"Staying Power":93.21},{"Creator":"Authentic Alison","Month-Year":"Sep-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Wacky Upstart Brand","Platform":"YouTube Shorts","Stopping Power":68.9,"Staying Power":39.87},{"Creator":"Creative Cathy","Month-Year":"Sep-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Wacky Upstart Brand","Platform":"TikTok","Stopping Power":56.78,"Staying Power":64.53},{"Creator":"Jacques Cousteau","Month-Year":"Sep-24","Country":"GB","Brand Category":"Beauty and Personal Care","Brand Name":"Wacky Upstart Brand","Platform":"TikTok","Stopping Power":42.1,"Staying Power":97.32},{"Creator":"Authentic Alison","Month-Year":"Sep-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Wacky Upstart Brand","Platform":"TikTok","Stopping Power":30.12,"Staying Power":78.9},{"Creator":"Influential Ike","Month-Year":"Sep-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Wacky Upstart Brand","Platform":"TikTok","Stopping Power":88.9,"Staying Power":92.1},{"Creator":"Jacques Cousteau","Month-Year":"Sep-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Wacky Upstart Brand","Platform":"TikTok","Stopping Power":93.45,"Staying Power":41.23},{"Creator":"Creative Cathy","Month-Year":"Sep-24","Country":"GB","Brand Category":"Beauty and Personal Care","Brand Name":"Wacky Upstart Brand","Platform":"Instagram","Stopping Power":76.89,"Staying Power":36.78},{"Creator":"Influential Ike","Month-Year":"Aug-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Wacky Upstart Brand","Platform":"Instagram","Stopping Power":35.67,"Staying Power":79.32},{"Creator":"Authentic Alison","Month-Year":"Aug-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Wacky Upstart Brand","Platform":"Instagram","Stopping Power":63.21,"Staying Power":32.1},{"Creator":"Jacques Cousteau","Month-Year":"Aug-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Wacky Upstart Brand","Platform":"Instagram","Stopping Power":87.65,"Staying Power":82.34},{"Creator":"Authentic Alison","Month-Year":"Aug-24","Country":"GB","Brand Category":"Beauty and Personal Care","Brand Name":"Wacky Upstart Brand","Platform":"TikTok","Stopping Power":75.43,"Staying Power":42.1},{"Creator":"Creative Cathy","Month-Year":"Aug-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Wacky Upstart Brand","Platform":"Facebook","Stopping Power":17.32,"Staying Power":25.67},{"Creator":"Jacques Cousteau","Month-Year":"Aug-24","Country":"GB","Brand Category":"Beauty and Personal Care","Brand Name":"Wacky Upstart Brand","Platform":"Facebook","Stopping Power":52.34,"Staying Power":89.67},{"Creator":"Authentic Alison","Month-Year":"Aug-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Wacky Upstart Brand","Platform":"Facebook","Stopping Power":93.21,"Staying Power":76.54},{"Creator":"Influential Ike","Month-Year":"Aug-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Wacky Upstart Brand","Platform":"Facebook","Stopping Power":15.67,"Staying Power":39.87},{"Creator":"Jacques Cousteau","Month-Year":"Aug-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Wacky Upstart Brand","Platform":"TikTok","Stopping Power":96.54,"Staying Power":71.23},{"Creator":"Creative Cathy","Month-Year":"Aug-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"YouTube Shorts","Stopping Power":61.98,"Staying Power":54.32},{"Creator":"Influential Ike","Month-Year":"Aug-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"YouTube Shorts","Stopping Power":28.76,"Staying Power":91.23},{"Creator":"Authentic Alison","Month-Year":"Aug-24","Country":"GB","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"YouTube Shorts","Stopping Power":50.21,"Staying Power":62.34},{"Creator":"Influential Ike","Month-Year":"Aug-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"TikTok","Stopping Power":69.43,"Staying Power":58.76},{"Creator":"Jacques Cousteau","Month-Year":"Jul-24","Country":"GB","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"YouTube Shorts","Stopping Power":23.45,"Staying Power":87.65},{"Creator":"Creative Cathy","Month-Year":"Jul-24","Country":"GB","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"TikTok","Stopping Power":75.43,"Staying Power":29.87},{"Creator":"Influential Ike","Month-Year":"Jul-24","Country":"GB","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"TikTok","Stopping Power":86.54,"Staying Power":33.45},{"Creator":"Authentic Alison","Month-Year":"Jul-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"TikTok","Stopping Power":65.78,"Staying Power":51.23},{"Creator":"Influential Ike","Month-Year":"Jul-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"TikTok","Stopping Power":46.32,"Staying Power":59.87},{"Creator":"Jacques Cousteau","Month-Year":"Jul-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"TikTok","Stopping Power":32.1,"Staying Power":84.56},{"Creator":"Creative Cathy","Month-Year":"Jul-24","Country":"GB","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"Instagram","Stopping Power":14.32,"Staying Power":95.43},{"Creator":"Influential Ike","Month-Year":"Jul-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"Instagram","Stopping Power":71.23,"Staying Power":47.65},{"Creator":"Authentic Alison","Month-Year":"Jul-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"TikTok","Stopping Power":41.23,"Staying Power":75.43},{"Creator":"Influential Ike","Month-Year":"Jul-24","Country":"GB","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"Instagram","Stopping Power":68.9,"Staying Power":56.78},{"Creator":"Authentic Alison","Month-Year":"Jul-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"Instagram","Stopping Power":19.87,"Staying Power":91.23},{"Creator":"Jacques Cousteau","Month-Year":"Jul-24","Country":"GB","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"Facebook","Stopping Power":39.87,"Staying Power":60.98},{"Creator":"Influential Ike","Month-Year":"Jul-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"TikTok","Stopping Power":84.56,"Staying Power":28.76},{"Creator":"Authentic Alison","Month-Year":"Jul-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"Facebook","Stopping Power":68.9,"Staying Power":51.23},{"Creator":"Influential Ike","Month-Year":"Jul-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"Facebook","Stopping Power":28.76,"Staying Power":62.34},{"Creator":"Authentic Alison","Month-Year":"Jul-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"Facebook","Stopping Power":80.12,"Staying Power":55.67},{"Creator":"Creative Cathy","Month-Year":"Sep-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"TikTok","Stopping Power":76.12,"Staying Power":12.78},{"Creator":"Influential Ike","Month-Year":"Sep-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"YouTube Shorts","Stopping Power":41.23,"Staying Power":48.9},{"Creator":"Jacques Cousteau","Month-Year":"Sep-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"YouTube Shorts","Stopping Power":19.87,"Staying Power":85.67},{"Creator":"Influential Ike","Month-Year":"Sep-24","Country":"US","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"TikTok","Stopping Power":79.32,"Staying Power":26.89},{"Creator":"Authentic Alison","Month-Year":"Sep-24","Country":"US","Brand Category":"Beauty and Personal Care","Brand Name":"Household Name Brand","Platform":"YouTube Shorts","Stopping Power":45.67,"Staying Power":52.34},{"Creator":"Creative Cathy","Month-Year":"Sep-24","Country":"GB","Brand Category":"Entertainment and Streaming","Brand Name":"Household Name Brand","Platform":"TikTok","Stopping Power":93.21,"Staying Power":81.23}
    ];

    const chart = Highcharts.chart('container', {
        chart: {
            type: 'scatter',
            zooming: {
                type: 'xy'
            }
        },
        title: {
            text: 'SSP - Sample',
            align: 'left'
        },
        subtitle: {
            text: 'Source: <a href="https://www.elementhuman.com/">Element Human</a>',
            align: 'left'
        },
        xAxis: {
            title: { 
              text: 'Staying Power',
              style: {
                  color: '#00a0ff',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  fontFamily: 'Poppins'
              }
            },
            labels: { format: '{value}' },
            min: 0,
            max: 100,
            tickInterval: 10,
            gridLineWidth: 1,
            gridLineColor: '#e6e6e6',
            tickmarkPlacement: 'on',
        },
        yAxis: {
            title: { text: 'Stopping Power',
              style: {
                  color: '#ff2198',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  fontFamily: 'Poppins'
              }
            },
            labels: { format: '{value}' },
            min: 0,
            max: 100,
            tickInterval: 10,
            gridLineWidth: 1,
            gridLineColor: '#e6e6e6',
            tickmarkPlacement: 'on',
        },
        legend: {
            enabled: true
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    lineWidth: 1,
                    lineColor: '#404040', 
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                jitter: {
                    x: 0.005
                }
            }
        },
        tooltip: {
            pointFormat: 'Creator: {point.custom.Creator}<br/>Brand Category: {point.custom.Brand Category}<br/>Brand Name: {point.custom.Brand Name}<br/>Platform: {point.custom.Platform}<br/>Staying Power: {point.x}<br/>Stopping Power: {point.y}'
        },
        series
    });

    function reload() {
        const checkFilters = (elm) => {
            return filters.every(f => f.value === null || f.value === elm[f.id]);
        };

        const getData = Platform => {
            return data.filter(elm => elm.Platform === Platform && checkFilters(elm))
                .map(elm => ({
                    id: elm.Creator,
                    x: elm["Staying Power"],
                    y: elm["Stopping Power"],
                    custom: elm                  
                }));
        };

        series.forEach((s, index) => {
            const newData = getData(s.id);
            chart.series[index].setData(newData, false);
        });

        chart.redraw();
    }

    function initializeFilters() {
        filters.forEach(f => {
            f.options = Array.from(new Set(data.map(item => item[f.id])))
                .sort((a, b) => a.toString().localeCompare(b.toString()));

            const control = document.getElementById(f.id);
            control.innerHTML = '<option selected value> -- all -- </option>' +
                f.options.map(d => `<option value="${d}">${d}</option>`).join("\n");

            control.addEventListener("change", function() {
                f.value = this.value === "" ? null : this.value;
                reload();
            });
        });
    }

    // Initialize filters and load all data points
    initializeFilters();
    reload();
    </script>
  </body>
</html>