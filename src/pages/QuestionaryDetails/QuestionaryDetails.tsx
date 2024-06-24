import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { QuestionaryService } from "../../services/questionaries";
import { AnswerDTO, QuestionaryDTO } from "../../dto/questionary.dto";
import { ResolutionService } from "../../services/resolutions";

export const QuestionaryDetails = () => {
  const { modelId, questionaryId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(true);
  const [questionary, setQuestionary] = useState<QuestionaryDTO>();
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerDTO[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!questionaryId) return;

    try {
      const { data } = await ResolutionService.create({
        questionaryId,
        resolution: selectedAnswers,
      });
      console.log(data);
      navigate(`/models/${modelId}`);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const handleSelectOption = (answer: AnswerDTO) => {
    setSelectedAnswers((prev) => [
      ...prev.filter((element) => element.questionId !== answer.questionId),
      answer,
    ]);
  };

  const fetchQuestionary = async () => {
    if (!questionaryId) return;

    try {
      const { data } = await QuestionaryService.findById(questionaryId);
      setQuestionary(data);
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
          width: "100%",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" fontFamily="Inter" color="black">
          {questionary?.name}
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
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {questionary?.questions &&
            questionary.questions.map((question, index) => (
              <Box
                key={question.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography variant="h6" fontFamily="Inter" color="black">
                  {index + 1} - {question.text}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  {question.answers &&
                    question.answers.map((answer) => (
                      <Box
                        key={answer.id}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "5px",
                        }}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          checked={selectedAnswers.some(
                            (selected) => selected.id === answer.id
                          )}
                          onChange={() => handleSelectOption(answer)}
                          required
                        />
                        <Typography
                          variant="body1"
                          fontFamily="Inter"
                          color="black"
                        >
                          {answer.text}
                        </Typography>
                      </Box>
                    ))}
                </Box>
              </Box>
            ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              navigate(`/models/${modelId}`);
            }}
          >
            Voltar
          </Button>
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </Box>
      </Box>
    );
  };

  useEffect(() => {
    fetchQuestionary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionaryId]);

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
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!loading ? <Details /> : <CircularProgress />}
        </Box>
      </Box>
    </Box>
  );
};
