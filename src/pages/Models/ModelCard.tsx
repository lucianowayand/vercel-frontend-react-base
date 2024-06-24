import { Box, Typography } from "@mui/material";
import { ModelDTO } from "../../dto/model.dto";
import { useNavigate } from "react-router-dom";
import { ResolutionDTO } from "../../dto/resolution.dto";

export const ModelCard = ({
  model,
  resolution,
}: {
  model: ModelDTO;
  resolution?: ResolutionDTO;
}) => {
  const navigate = useNavigate();

  const InfoLabel = ({
    label,
    value,
    width,
  }: {
    label: string;
    value: string;
    width?: string;
  }) => (
    <Box sx={{ width }}>
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "Inter",
          color: "gray",
          fontWeight: 600,
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          fontFamily: "Inter",
          color: "black",
          fontWeight: 600,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {value}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        width: "100%",
        height: "100px",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        "&:hover": {
          background:
            model?.questionaries && model.questionaries.length > 0
              ? "#E0E0E0"
              : undefined,
          cursor:
            model?.questionaries && model?.questionaries.length > 0
              ? "pointer"
              : "not-allowed",
        },
      }}
      onClick={() => {
        if (model?.questionaries && model?.questionaries?.length > 0) {
          navigate(`/models/${model.id}`);
        }
      }}
    >
      <Box
        sx={{
          width: "100%",
          marginX: "20px",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <InfoLabel label="MODELO" value={model.name} />
        <InfoLabel label="DESCRIÇÃO" value={model.description} width="600px" />
        <InfoLabel
          label="QTD. DE QUESTIONARIOS"
          value={model.questionaries?.length.toString() || "0"}
        />
        <InfoLabel
          label="RESULTADO"
          value={(resolution && resolution?.learningType.name) || "-"}
        />
      </Box>
    </Box>
  );
};
