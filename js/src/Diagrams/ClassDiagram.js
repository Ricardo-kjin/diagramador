/**
 * Adds the general palette to the sidebar.
 */
const addClassDiagramPalette = function (sb, expand) {

  // Reusable cells
  var field = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;');
  var attributeField = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=attribute');
  var methodField = new mxCell('+ method(type): type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');

  field.vertex = true;
  attributeField.vertex = true;
  methodField.vertex = true;

  var divider = new mxCell('', new mxGeometry(0, 0, 40, 8), 'line;html=1;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;');
  divider.vertex = true;

  // Default tags
  var dt = 'uml static class ';

  var fns = [
    
	 	sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Internet Branking System', new mxGeometry(0, 0, 160, 90),
		    	'rounded=0;whiteSpace=wrap;html=1;shadow=0;dashed=1;sketch=0;strokeColor=#000000;strokeWidth=1;fillColor=none;'
      );
      cell.vertex = true;
      

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Internet Branking System');
    }),
    // sb.addEntry(dt + 'item member method function variable field attribute label', function () {
    //   return sb.createVertexTemplateFromCells([sb.cloneCell(field, '+ item: attribute')], field.geometry.width, field.geometry.height, 'Item 1');
    // }),
    // sb.addEntry(dt + 'divider hline line separator', function () {
    //   return sb.createVertexTemplateFromCells([divider.clone()], divider.geometry.width, divider.geometry.height, 'Divider');
    // }),
    sb.createVertexTemplateEntry(
      'text;html=1;align=center;fontStyle=1;verticalAlign=middle;spacingLeft=3;spacingRight=3;strokeColor=none;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;',
      80, 26, 'Title', 'Title', null, null, dt + 'title label'
    ),

    
    sb.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;entryX=0.5;entryY=0;dashed=1;jettySize=auto;orthogonalLoop=1;', 160, 0, 'Description', 'Relationship', null, 'uml generalization extend'),

    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Class', new mxGeometry(0, 0, 160, 90),
		    	'swimlane;html=1;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;fillColor=#F9B74A;fontColor=#FFFFFF;fontFamily=Helvetica;componentName=class;strokeWidth=2;swimlaneFillColor=#FBE2B9;'
      );
      //ANTIGUO COLOR  fillColor=#438dd4;fontColor=#FFFFFF;fontFamily=Helvetica;componentName=class;strokeWidth=2;swimlaneFillColor=#F9B74A;
      cell.vertex = true;
      cell.insert(attributeField.clone());
      cell.insert(methodField.clone());
      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Class');
    }),
    //Giagrama System
    // sb.addEntry(dt + 'object instance', function () {
    //   var cell = new mxCell(
    //     'Software System\nExisting System', new mxGeometry(0, 0, 160, 90),
		//     	'html=1;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;fillColor=#999999;fontColor=#FFFFFF;fontFamily=Helvetica;componentName=class;strokeWidth=2;'
    //   );
    //   cell.vertex = true;
    //   return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Software System, Existing System');
    // }),
    //DIAGRAM DATABASE
    // sb.addEntry(dt + 'object instance', function () {
    //   var cell = new mxCell(
    //     'Database', new mxGeometry(0, 0, 160, 90),
    //     'shape=cylinder;whiteSpace=wrap;html=1;fontStyle=1;fontFamily=Helvetica;fontSize=14;fillColor=#438dd4;strokeColor=#000000;strokeWidth=2;fontColor=#FFFFFF;'
    //   );
    //   cell.vertex = true;
    //   return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Database');
    // }),
    //DIAGRAMA ACTOR
    // sb.addEntry(dt + 'object instance', function () {
    //   var cell = new mxCell(
    //     'Actor', new mxGeometry(0, 0, 160, 90),
    //     'shape=actor;whiteSpace=wrap;html=1;fontStyle=1;fontFamily=Helvetica;fontSize=14;fillColor=#438dd4;strokeColor=#000000;strokeWidth=2;fontColor=#FFFFFF;'
    //   );
    //   cell.vertex = true;
    //   return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Actor');
    // }),

  ];

  sb.addPaletteFunctions('classDiagram', mxResources.get('classDiagram'), expand || false, fns);
  
};

module.exports = addClassDiagramPalette;