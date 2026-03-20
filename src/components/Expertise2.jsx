import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import ForceGraph2d from "react-force-graph-2d";

const LABEL_ZOOM_THRESHOLD = 1.65; // labels appear at this zoom level and above

const Expertise2 = () => {
  const fgRef = useRef();
  const [zoom, setZoom] = useState(1);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [graphKey, setGraphKey] = useState(0);

  const initForces = useCallback(() => {
    const fg = fgRef.current;
    if (!fg) return;
    fg.d3Force("center").strength(1.9);
    fg.d3Force("charge").strength(-5);
    fg.d3ReheatSimulation();
  }, []);

  useEffect(() => {
    initForces();
  }, [initForces, graphKey]);

  const handleZoom = useCallback(({ k }) => {
    setZoom(k);
  }, []);

  const handleZoomIn = useCallback(() => {
    const fg = fgRef.current;
    if (!fg) return;
    fg.zoom(zoom * 1.4, 400);
  }, [zoom]);

  const handleZoomOut = useCallback(() => {
    const fg = fgRef.current;
    if (!fg) return;
    fg.zoom(zoom / 1.4, 400);
  }, [zoom]);

  const handleCenter = useCallback(() => {
    const fg = fgRef.current;
    if (!fg) return;
    fg.zoomToFit(400, 40);
  }, []);

  const graphData = useMemo(
    () => ({
      nodes: [
        { id: "Web Development", group: 1 },
        { id: "React Js", group: 1 },
        { id: "Next Js", group: 1 },
        { id: "TypeScript", group: 1 },
        { id: "JavaScript", group: 1 },
        { id: "Backend Development", group: 1 },
        { id: "REST APIs", group: 1 },
        { id: "Databases", group: 1 },
        { id: "Node Js", group: 1 },
        { id: "Python", group: 1 },
        { id: "Matplotlib", group: 1 },
        { id: "Flask", group: 1 },
        { id: "Express", group: 1 },
        { id: "Authentication", group: 1 },
        { id: "O-Auth", group: 1 },
        { id: "Sessions / Cookies", group: 1 },
        { id: "JWT", group: 1 },
        { id: "CRUD", group: 1 },
        { id: "PostgreSQL", group: 1 },
        { id: "SQLite", group: 1 },
        { id: "Mongo DB", group: 1 },
        { id: "Dev-Ops / Cloud", group: 1 },
        { id: "Docker", group: 1 },
        { id: "Docker Compose", group: 1 },
        { id: "CI/CD", group: 1 },
        { id: "Kubernetes", group: 1 },
        { id: "Mobile Development", group: 1 },
        { id: "Flutter", group: 1 },
        { id: "UI/UX Design", group: 1 },
        { id: "Figma", group: 1 },
        { id: "Canva", group: 1 },
        ...Array.from({ length: 40 }, (_, i) => ({
          // id: `__phantom_${i}`,
          id: ` `,
          group: 1,
        })),
      ],
      links: [
        { source: "Web Development", target: "React Js", value: 1 },
        { source: "Web Development", target: "Next Js", value: 1 },
        { source: "Web Development", target: "TypeScript", value: 1 },
        { source: "Web Development", target: "JavaScript", value: 1 },
        { source: "Backend Development", target: "REST APIs", value: 1 },
        { source: "Backend Development", target: "Databases", value: 1 },
        { source: "Backend Development", target: "Node Js", value: 1 },
        { source: "Backend Development", target: "Python", value: 1 },
        { source: "Backend Development", target: "Authentication", value: 1 },
        { source: "Python", target: "Matplotlib", value: 1 },
        { source: "Python", target: "Flask", value: 1 },
        { source: "Node Js", target: "Express", value: 1 },
        { source: "Authentication", target: "O-Auth", value: 1 },
        { source: "Authentication", target: "Sessions / Cookies", value: 1 },
        { source: "Authentication", target: "JWT", value: 1 },
        { source: "Databases", target: "CRUD", value: 1 },
        { source: "Databases", target: "PostgreSQL", value: 1 },
        { source: "Databases", target: "SQLite", value: 1 },
        { source: "Databases", target: "Mongo DB", value: 1 },
        { source: "Dev-Ops / Cloud", target: "Docker", value: 1 },
        { source: "Dev-Ops / Cloud", target: "Docker Compose", value: 1 },
        { source: "Dev-Ops / Cloud", target: "CI/CD", value: 1 },
        { source: "Dev-Ops / Cloud", target: "Kubernetes", value: 1 },
        { source: "Mobile Development", target: "Flutter", value: 1 },
        { source: "UI/UX Design", target: "Figma", value: 1 },
        { source: "UI/UX Design", target: "Canva", value: 1 },
        // { source: "Web Development", target: "UI/UX Design", value: 1 },
        // { source: "Flutter", target: "UI/UX Design", value: 1 },
      ],
    }),
    [],
  );
  const handleReload = useCallback(() => {
    setHoveredNode(null);

    graphData.nodes.forEach((node) => {
      delete node.x;
      delete node.y;
      delete node.vx;
      delete node.vy;
    });

    setGraphKey((k) => k + 1);
  }, []);

  const hoveredNeighbors = useMemo(() => {
    if (!hoveredNode) return new Set();
    const neighbors = new Set();
    graphData.links.forEach((link) => {
      const srcId =
        typeof link.source === "object" ? link.source.id : link.source;
      const tgtId =
        typeof link.target === "object" ? link.target.id : link.target;
      if (srcId === hoveredNode.id) neighbors.add(tgtId);
      if (tgtId === hoveredNode.id) neighbors.add(srcId);
    });
    return neighbors;
  }, [hoveredNode, graphData.links]);

  const handleNodeHover = useCallback((node) => {
    setHoveredNode(node || null);
    // Change cursor style on the canvas element
    // const canvas = fgRef.current?.renderer?.domElement;
    // if (canvas) {
    //   canvas.style.cursor = node ? "pointer" : "default";
    // }
  }, []);

  const linkColor = useCallback(
    (link) => {
      if (!hoveredNode) return "#94a3b8"; // default muted slate
      const srcId =
        typeof link.source === "object" ? link.source.id : link.source;
      const tgtId =
        typeof link.target === "object" ? link.target.id : link.target;
      const isConnected = srcId === hoveredNode.id || tgtId === hoveredNode.id;
      return isConnected ? "#bae3a1" : "#cbd5e1"; // amber highlight vs faded
    },
    [hoveredNode],
  );

  const linkWidth = useCallback(
    (link) => {
      if (!hoveredNode) return 1;
      const srcId =
        typeof link.source === "object" ? link.source.id : link.source;
      const tgtId =
        typeof link.target === "object" ? link.target.id : link.target;
      return srcId === hoveredNode.id || tgtId === hoveredNode.id ? 2.5 : 1;
    },
    [hoveredNode],
  );

  // const nodeCanvasObject = useCallback(
  //   (node, ctx, globalScale) => {
  //     const isHovered = hoveredNode && node.id === hoveredNode.id;
  //     const isNeighbor = hoveredNode && hoveredNeighbors.has(node.id);
  //     const radius = isHovered ? 7 : 5;
  //
  //     // const radius = 5;
  //
  //     // Draw the node circle
  //     ctx.beginPath();
  //     ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
  //     ctx.fillStyle = "#6366f1";
  //     ctx.fill();
  //
  //     // Only draw label when zoomed in past threshold
  //     if (globalScale >= LABEL_ZOOM_THRESHOLD) {
  //       // Fade in smoothly between threshold and threshold + 1
  //       const opacity = Math.min(1, (globalScale - LABEL_ZOOM_THRESHOLD) / 1);
  //
  //       const label = node.id;
  //       const fontSize = 12 / globalScale; // keep label size consistent in screen-space
  //       ctx.font = `${fontSize}px Sans-Serif`;
  //       ctx.textAlign = "center";
  //       ctx.textBaseline = "top";
  //       // ctx.fillStyle = `rgba(200, 200, 200, ${opacity})`;
  //       ctx.fillStyle = `#000000`;
  //       ctx.fillText(label, node.x, node.y + radius + 2 / globalScale);
  //     }
  //   },
  //   [], // no dependency on zoom state — globalScale comes directly from the canvas renderer
  // );

  const nodeCanvasObject = useCallback(
    (node, ctx, globalScale) => {
      const isHovered = hoveredNode && node.id === hoveredNode.id;
      const isNeighbor = hoveredNode && hoveredNeighbors.has(node.id);
      const radius = 5;

      // Draw the node circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);

      if (isHovered) {
        ctx.fillStyle = "#7ddb42"; // amber for hovered
      } else if (isNeighbor) {
        ctx.fillStyle = "#94de66"; // lighter indigo for neighbors
      } else {
        ctx.fillStyle = hoveredNode ? "#3b4e6e77" : "#3b4e6e"; // dim non-connected nodes
      }
      ctx.fill();

      // Draw label when zoomed in OR when this node is hovered
      const shouldShowLabel = globalScale >= LABEL_ZOOM_THRESHOLD || isHovered;

      if (shouldShowLabel && node.id) {
        const opacity = isHovered
          ? 1
          : Math.min(1, (globalScale - LABEL_ZOOM_THRESHOLD) / 1.5);

        const label = node.id;
        const fontSize = 12 / globalScale;
        ctx.font = `${isHovered ? "bold " : ""}${fontSize}px Sans-Serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillStyle = isHovered ? "#2b2a29cc" : `rgba(0,0,0,${opacity})`;
        ctx.fillText(label, node.x, node.y + radius + 2 / globalScale);
      }
    },
    [hoveredNode, hoveredNeighbors],
  );

  const btnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    background: "#ffffff",
    cursor: "pointer",
    fontSize: "18px",
    color: "#475569",
    userSelect: "none",
    transition: "background 0.15s, border-color 0.15s",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  };

  return (
    <>
      <div className="mt-[10vh]">
        <p className="text-5xl pb-1 sm:text-6xl overflow-hidden ml-[10vw] mt-4 underlined w-fit">
          Skills
        </p>
        <div className="flex justify-center flex-col items-center mt-2">
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "12px",
              alignItems: "center",
            }}
          >
            <button
              style={btnStyle}
              onClick={handleZoomIn}
              title="Zoom in"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f1f5f9";
                e.currentTarget.style.borderColor = "#94a3b8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              +
            </button>

            <button
              style={btnStyle}
              onClick={handleZoomOut}
              title="Zoom out"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f1f5f9";
                e.currentTarget.style.borderColor = "#94a3b8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              −
            </button>

            <button
              style={{
                ...btnStyle,
                width: "auto",
                padding: "0 12px",
                fontSize: "13px",
              }}
              onClick={handleCenter}
              title="Fit graph to view"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f1f5f9";
                e.currentTarget.style.borderColor = "#94a3b8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              ⊡ Center
            </button>

            <button
              style={{
                ...btnStyle,
                width: "auto",
                padding: "0 12px",
                fontSize: "13px",
              }}
              onClick={handleReload}
              title="Reload graph layout"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f1f5f9";
                e.currentTarget.style.borderColor = "#94a3b8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              ↺ Reload
            </button>

            <span
              style={{
                fontSize: "12px",
                color: "#94a3b8",
                marginLeft: "4px",
                userSelect: "none",
              }}
            >
              {Math.round(zoom * 100)}%
            </span>
          </div>
          <div className="overflow-hidden border-2  rounded-md border-slate-800">
            <ForceGraph2d
              ref={fgRef}
              key={graphKey}
              graphData={graphData}
              onZoom={handleZoom}
              onNodeHover={handleNodeHover}
              onNodeDrag={handleNodeHover}
              onNodeDragEnd={() => setHoveredNode(null)}
              nodeCanvasObject={nodeCanvasObject}
              nodeCanvasObjectMode={() => "replace"}
              // backgroundColor="#000000"
              width={
                window.innerWidth > 1200
                  ? window.innerWidth * 0.6
                  : window.innerWidth * 0.8
              }
              height={window.innerHeight * 0.6}
              linkColor={linkColor}
              linkWidth={linkWidth}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise2;
