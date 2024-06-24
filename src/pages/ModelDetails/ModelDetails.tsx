import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ModelDTO } from "../../dto/model.dto";
import { ModelService } from "../../services/models";
import { ResolutionService } from "../../services/resolutions";
import { ResolutionDTO } from "../../dto/resolution.dto";

export const ModelDetails = () => {
  const { id } = useParams();

  const [model, setModel] = useState<ModelDTO>();
  const [resolutions, setResolutions] = useState<ResolutionDTO[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const fetchModel = async () => {
    if (!id) return;
    setLoading(true);

    try {
      const { data } = await ModelService.findById(id);
      setModel(data);
      fetchResolutions();
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const fetchResolutions = async () => {
    if (!id) return;
    setLoading(true);

    try {
      const { data } = await ResolutionService.findByModelId(id);
      setResolutions(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const Details = () => {
    return (
      <Box
        sx={{
          paddingX: "5%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography variant="h4" fontFamily="Inter" color="black">
            {model?.name}
          </Typography>

          <Typography fontFamily="Inter" color="black">
            {model?.description}
          </Typography>

          {resolutions && resolutions?.length > 0 && (
            <Box>
              <Typography variant="h6" fontFamily="Inter" color="black">
                Resultado: {resolutions[0].learningType?.name}
              </Typography>

              <Typography fontFamily="Inter" color="black">
                {resolutions[0].learningType?.description}
              </Typography>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              navigate("/models");
            }}
          >
            Voltar
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              if (model?.questionaries && model?.questionaries.length > 0) {
                navigate(
                  `/models/${id}/questionary/${model?.questionaries[0].id}`
                );
              } else {
                console.log(model);
              }
            }}
          >
            Responder questionario
          </Button>
        </Box>
      </Box>
    );
  };

  useEffect(() => {
    fetchModel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
          borderRadius: "8px",
          shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
          height: "65%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {!loading && model ? <Details /> : <CircularProgress />}
        </Box>
      </Box>
    </Box>
  );
};
