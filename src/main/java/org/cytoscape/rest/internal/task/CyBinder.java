package org.cytoscape.rest.internal.task;

import java.util.Properties;

import org.cytoscape.application.CyApplicationManager;
import org.cytoscape.application.swing.CySwingApplication;
import org.cytoscape.command.AvailableCommands;
import org.cytoscape.command.CommandExecutorTaskFactory;
import org.cytoscape.group.CyGroupFactory;
import org.cytoscape.group.CyGroupManager;
import org.cytoscape.io.read.InputStreamTaskFactory;
import org.cytoscape.io.write.CyNetworkViewWriterFactory;
import org.cytoscape.model.CyNetworkFactory;
import org.cytoscape.model.CyNetworkManager;
import org.cytoscape.model.CyTableFactory;
import org.cytoscape.model.CyTableManager;
import org.cytoscape.model.subnetwork.CyRootNetworkManager;
import org.cytoscape.property.CyProperty;
import org.cytoscape.rest.internal.CyActivator.LevelOfDetails;
import org.cytoscape.rest.internal.CyActivator.WriterListener;
import org.cytoscape.rest.internal.EdgeBundler;
import org.cytoscape.rest.internal.GraphicsWriterManager;
import org.cytoscape.rest.internal.MappingFactoryManager;
import org.cytoscape.rest.internal.TaskFactoryManager;
import org.cytoscape.rest.internal.reader.EdgeListReaderFactory;
import org.cytoscape.session.CySessionManager;
import org.cytoscape.task.NetworkTaskFactory;
import org.cytoscape.task.create.NewNetworkSelectedNodesAndEdgesTaskFactory;
import org.cytoscape.task.create.NewSessionTaskFactory;
import org.cytoscape.task.read.LoadNetworkURLTaskFactory;
import org.cytoscape.task.read.OpenSessionTaskFactory;
import org.cytoscape.task.select.SelectFirstNeighborsTaskFactory;
import org.cytoscape.task.write.ExportNetworkViewTaskFactory;
import org.cytoscape.task.write.SaveSessionAsTaskFactory;
import org.cytoscape.view.layout.CyLayoutAlgorithmManager;
import org.cytoscape.view.model.CyNetworkViewFactory;
import org.cytoscape.view.model.CyNetworkViewManager;
import org.cytoscape.view.presentation.RenderingEngineManager;
import org.cytoscape.view.vizmap.VisualMappingManager;
import org.cytoscape.view.vizmap.VisualStyleFactory;
import org.cytoscape.work.SynchronousTaskManager;
import org.cytoscape.work.TaskMonitor;
import org.glassfish.hk2.utilities.binding.AbstractBinder;

public class CyBinder extends AbstractBinder {

	private final TaskMonitor headlessMonitor;

	private final CyNetworkManager networkManager;
	private final CyNetworkViewManager networkViewManager;
	private final CySessionManager sessionManager;
	private final CyNetworkFactory networkFactory;
	private final CyNetworkViewFactory networkViewFactory;
	private final TaskFactoryManager tfManager;
	private final CyApplicationManager applicationManager;
	private final VisualMappingManager vmm;
	private final CyLayoutAlgorithmManager layoutManager;
	private final CyTableManager tableMamanger;
	private final CyTableFactory tableFactory;

	private final WriterListener vizmapWriterFactoryListener;
	private final VisualStyleFactory vsFactory;

	private final MappingFactoryManager mappingFactoryManager;
	private final CyGroupFactory groupFactory;
	private final CyGroupManager groupManager;
	private final CyRootNetworkManager cyRootNetworkManager;
	
	private final LoadNetworkURLTaskFactory loadNetworkURLTaskFactory;

	private final CyProperty<Properties> props;
	
	// TFs
	private final NewNetworkSelectedNodesAndEdgesTaskFactory newNetworkSelectedNodesAndEdgesTaskFactory;
	private final EdgeListReaderFactory edgelistReaderFactory;
	private final CyNetworkViewWriterFactory cytoscapeJsWriterFactory;
	private final InputStreamTaskFactory cytoscapeJsReaderFactory;
	private final NetworkTaskFactory fitContent;
	private final LevelOfDetails toggleLod;
	private final EdgeBundler edgeBundler;
	private final RenderingEngineManager renderingEngineManager;
	private final SaveSessionAsTaskFactory saveSessionAsTaskFactory;
	private final OpenSessionTaskFactory openSessionTaskFactory;
	private final NewSessionTaskFactory newSessionTaskFactory;
	private final CySwingApplication desktop;
	private final SelectFirstNeighborsTaskFactory selectFirstNeighborsTaskFactory;
	private final ExportNetworkViewTaskFactory exportNetworkViewTaskFactory;
	
	private final GraphicsWriterManager graphicsWriterManager;
	
	// For Command API
	private final AvailableCommands available;
	private final CommandExecutorTaskFactory ceTaskFactory;
	private final SynchronousTaskManager<?> synchronousTaskManager;
	
	private final CyNetworkViewWriterFactory cxWriterFactory;
	

	public CyBinder(final CyNetworkManager networkManager, final CyNetworkViewManager networkViewManager,
			final CyNetworkFactory networkFactory, final TaskFactoryManager tfManager,
			final CyApplicationManager applicationManager, final VisualMappingManager vmm,
			final CyNetworkViewWriterFactory cytoscapeJsWriterFactory,
			final InputStreamTaskFactory cytoscapeJsReaderFactory, final CyLayoutAlgorithmManager layoutManager,
			final WriterListener vizmapWriterFactoryListener, final TaskMonitor headlessMonitor,
			final CyTableManager tableManager, final VisualStyleFactory vsFactory,
			final MappingFactoryManager mappingFactoryManager, final CyGroupFactory groupFactory,
			final CyGroupManager groupManager, final CyRootNetworkManager cyRootNetworkManager,
			final LoadNetworkURLTaskFactory loadNetworkURLTaskFactory, final CyProperty<Properties> props,
			final NewNetworkSelectedNodesAndEdgesTaskFactory newNetworkSelectedNodesAndEdgesTaskFactory, 
			final EdgeListReaderFactory edgelistReaderFactory, final CyNetworkViewFactory networkViewFactory,
			final CyTableFactory tableFactory, final NetworkTaskFactory fitContent, final EdgeBundler edgeBundler,
			final RenderingEngineManager renderingEngineManager, final CySessionManager sessionManager,
			final SaveSessionAsTaskFactory saveSessionAsTaskFactory, final OpenSessionTaskFactory openSessionTaskFactory,
			final NewSessionTaskFactory newSessionTaskFactory, final CySwingApplication desktop,
			final LevelOfDetails toggleLod, final SelectFirstNeighborsTaskFactory selectFirstNeighborsTaskFactory,
			final GraphicsWriterManager graphicsWriterManager, final ExportNetworkViewTaskFactory exportNetworkViewTaskFactory,
			final AvailableCommands available, final CommandExecutorTaskFactory ceTaskFactory, 
			final SynchronousTaskManager<?> synchronousTaskManager, final CyNetworkViewWriterFactory cxWriterFactory) {
		this.networkManager = networkManager;
		this.networkViewManager = networkViewManager;
		this.networkFactory = networkFactory;
		this.tfManager = tfManager;
		this.applicationManager = applicationManager;
		this.vmm = vmm;
		this.cytoscapeJsReaderFactory = cytoscapeJsReaderFactory;
		this.cytoscapeJsWriterFactory = cytoscapeJsWriterFactory;
		this.layoutManager = layoutManager;
		this.vizmapWriterFactoryListener = vizmapWriterFactoryListener;
		this.headlessMonitor = headlessMonitor;
		this.tableMamanger = tableManager;
		this.vsFactory = vsFactory;
		this.mappingFactoryManager = mappingFactoryManager;
		this.groupFactory = groupFactory;
		this.groupManager = groupManager;
		this.cyRootNetworkManager = cyRootNetworkManager;
		this.loadNetworkURLTaskFactory = loadNetworkURLTaskFactory;
		this.props = props;
		this.newNetworkSelectedNodesAndEdgesTaskFactory = newNetworkSelectedNodesAndEdgesTaskFactory;
		this.edgelistReaderFactory = edgelistReaderFactory;
		this.networkViewFactory = networkViewFactory;
		this.tableFactory = tableFactory;
		this.fitContent = fitContent;
		this.edgeBundler = edgeBundler;
		this.renderingEngineManager = renderingEngineManager;
		this.sessionManager = sessionManager;
		this.saveSessionAsTaskFactory = saveSessionAsTaskFactory;
		this.openSessionTaskFactory = openSessionTaskFactory;
		this.newSessionTaskFactory = newSessionTaskFactory;
		this.desktop = desktop;
		this.toggleLod = toggleLod;
		this.selectFirstNeighborsTaskFactory = selectFirstNeighborsTaskFactory;
		this.graphicsWriterManager = graphicsWriterManager;
		this.exportNetworkViewTaskFactory = exportNetworkViewTaskFactory;
		this.available = available;
		this.ceTaskFactory = ceTaskFactory;
		this.synchronousTaskManager = synchronousTaskManager;
		this.cxWriterFactory = cxWriterFactory;
	}


	@Override
	protected void configure() {
		bind(networkManager).to(CyNetworkManager.class);
		bind(networkViewManager).to(CyNetworkViewManager.class);
		bind(networkFactory).to(CyNetworkFactory.class);
		bind(tfManager).to(TaskFactoryManager.class);
		bind(vmm).to(VisualMappingManager.class);
		bind(applicationManager).to(CyApplicationManager.class);
		bind(cytoscapeJsReaderFactory).to(InputStreamTaskFactory.class);
		bind(cytoscapeJsWriterFactory).to(CyNetworkViewWriterFactory.class);
		bind(layoutManager).to(CyLayoutAlgorithmManager.class);
		bind(vizmapWriterFactoryListener).to(WriterListener.class);
		bind(headlessMonitor).to(TaskMonitor.class);
		bind(tableMamanger).to(CyTableManager.class);
		bind(vsFactory).to(VisualStyleFactory.class);
		bind(mappingFactoryManager).to(MappingFactoryManager.class);
		bind(groupFactory).to(CyGroupFactory.class);
		bind(groupManager).to(CyGroupManager.class);
		bind(cyRootNetworkManager).to(CyRootNetworkManager.class);
		bind(loadNetworkURLTaskFactory).to(LoadNetworkURLTaskFactory.class);
		bind(props).to(CyProperty.class);
		bind(newNetworkSelectedNodesAndEdgesTaskFactory).to(NewNetworkSelectedNodesAndEdgesTaskFactory.class);
		bind(edgelistReaderFactory).to(EdgeListReaderFactory.class);
		bind(networkViewFactory).to(CyNetworkViewFactory.class);
		bind(tableFactory).to(CyTableFactory.class);
		bind(fitContent).to(NetworkTaskFactory.class);
		bind(edgeBundler).to(EdgeBundler.class);
		bind(renderingEngineManager).to(RenderingEngineManager.class);
		bind(sessionManager).to(CySessionManager.class);
		bind(saveSessionAsTaskFactory).to(SaveSessionAsTaskFactory.class);
		bind(openSessionTaskFactory).to(OpenSessionTaskFactory.class);
		bind(newSessionTaskFactory).to(NewSessionTaskFactory.class);
		bind(desktop).to(CySwingApplication.class);
		bind(toggleLod).to(LevelOfDetails.class);
		bind(selectFirstNeighborsTaskFactory).to(SelectFirstNeighborsTaskFactory.class);
		bind(graphicsWriterManager).to(GraphicsWriterManager.class);
		bind(exportNetworkViewTaskFactory).to(ExportNetworkViewTaskFactory.class);
		
		// CX Support is an optional dependency as of v3.3.7.
		if(cxWriterFactory != null) {
			bind(cxWriterFactory).named("cxWriterFactory").to(CyNetworkViewWriterFactory.class);
		}
		
		// For Command API
		bind(available).to(AvailableCommands.class);
		bind(ceTaskFactory).to(CommandExecutorTaskFactory.class);
		bind(synchronousTaskManager).to(SynchronousTaskManager.class);
	}
}