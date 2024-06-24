import { Box, CircularProgress, Typography } from "@mui/material";
import { ModelService } from "../../services/models";
import { useEffect, useState } from "react";
import { ModelDTO } from "../../dto/model.dto";
import { ModelCard } from "./ModelCard";
import { ResolutionService } from "../../services/resolutions";
import { ResolutionDTO } from "../../dto/resolution.dto";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(true);
  const [models, setModels] = useState<ModelDTO[]>([]);
  const [resolutions, setResolutions] = useState<ResolutionDTO[]>([]);

  const fetchModels = async () => {
    try {
      const { data: modelData } = await ModelService.findAll();
      setModels(modelData);

      const { data: resolutionData } = await ResolutionService.fetchAll();
      setResolutions(resolutionData);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          background: "white",
          padding: "40px 20px",
          minWidth: "50%",
          height: "50%",
          borderRadius: "8px",
          shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontFamily="Inter">
          Modelos
        </Typography>
        <Box
          sx={{
            overflowY: "auto",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#888",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
            padding: "30px 20px",
          }}
        >
          {loading && <CircularProgress />}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {models.map((model) => (
              <ModelCard
                model={model}
                resolution={
                  resolutions.filter(
                    (element) => element.learningType?.modelId === model.id
                  )[0]
                }
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
