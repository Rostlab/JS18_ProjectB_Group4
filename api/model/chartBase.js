class ChartBase {
  constructor(layout) {
    this.layout = layout;
  }

  updateTitle(title) {
    this.layout.title = title;
  }
}

module.exports = ChartBase;
