import { CareerLesson } from '../../types';

export const deepLearningNlpLessons: CareerLesson[] = [
  {
    id: 'dl-lesson-1',
    milestoneId: 'ms-deep-learning',
    order: 1,
    title: '1. Neural Networks: Perceptrons, Activation Functions & Backprop',
    durationMinutes: 30,
    conceptExplanation: 'Artificial Neural Networks (ANNs) consist of interconnected layers of artificial neurons (perceptrons). Each neuron computes a weighted sum of its inputs plus a bias (z = W · x + b), passes it through a non-linear activation function (ReLU, Sigmoid, GeLU), and forwards it to the next layer. During training, Backpropagation computes gradients of the loss function with respect to every weight using the Calculus Chain Rule, updating weights via Stochastic Gradient Descent (SGD) or Adam optimizer.',
    whyImportant: 'Deep Learning enables computers to process unstructured data: images, speech, audio, and human text. All modern AI breakthroughs (ChatGPT, Midjourney, Claude, Gemini) are deep neural networks.',
    syntax: `# Basic PyTorch Feedforward Neural Network
import torch
import torch.nn as nn

class BinaryClassifier(nn.Module):
    def __init__(self, input_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, 64),
            nn.ReLU(),
            nn.Linear(64, 1),
            nn.Sigmoid()
        )
    def forward(self, x):
        return self.net(x)`,
    exampleDescription: 'Building a simple 2-layer neural network in PyTorch and stepping through forward pass and backward gradient updates.',
    codeSnippet: `import torch
import torch.nn as nn
import torch.optim as optim

# Synthetic batch: 4 samples with 3 features each
X = torch.tensor([[1.0, 2.0, 3.0],
                  [4.0, 5.0, 6.0],
                  [7.0, 8.0, 9.0],
                  [1.5, 2.5, 3.5]], dtype=torch.float32)
y = torch.tensor([[0.0], [1.0], [1.0], [0.0]], dtype=torch.float32)

# Define simple Multi-Layer Perceptron (MLP)
model = nn.Sequential(
    nn.Linear(3, 8),    # Input -> Hidden Layer (3 in, 8 out)
    nn.ReLU(),          # Non-linear activation: max(0, x)
    nn.Linear(8, 1),    # Hidden -> Output (8 in, 1 out)
    nn.Sigmoid()        # Probability output between 0 and 1
)

criterion = nn.BCELoss()  # Binary Cross Entropy Loss
optimizer = optim.Adam(model.parameters(), lr=0.01)

# Training loop: 5 epochs demonstration
for epoch in range(1, 6):
    optimizer.zero_grad()      # Reset gradients from previous step
    outputs = model(X)         # Forward pass
    loss = criterion(outputs, y) # Compute loss
    loss.backward()            # Backpropagation: Compute dLoss/dW
    optimizer.step()           # Optimizer: W = W - lr * grad
    
    print(f"Epoch {epoch}/5 - Loss: {loss.item():.4f}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 6-11: Preparing PyTorch tensors representing feature inputs X and target binary outputs y.',
      'Line 14-19: Creating a sequential model architecture with Linear matrix transformations, ReLU non-linearity, and Sigmoid classification output.',
      'Line 21-22: Initializing Binary Cross Entropy (BCELoss) and Adam adaptive learning rate optimizer.',
      'Line 25-31: The canonical 5-step PyTorch training loop: zero_grad(), forward pass, loss calculation, backward pass, optimizer step.'
    ],
    realWorldExample: 'Tesla Autopilot’s Vision neural network processes 8 high-definition camera feeds running 36 frames per second, passing visual features through deep networks to segment lanes and pedestrians.',
    commonMistakes: [
      {
        mistake: 'Forgetting optimizer.zero_grad() in the PyTorch training loop.',
        fix: 'PyTorch accumulates gradients by default. If you do not call optimizer.zero_grad(), gradients will add up across batches, exploding weights.'
      }
    ],
    practiceExercises: [
      {
        task: 'Calculate the output of a ReLU activation function on inputs [-5.0, 0.0, 3.2, -1.1].',
        hint: 'ReLU(x) = max(0, x). Negative values become 0; positive values remain unchanged.',
        solutionSnippet: 'inputs = [-5.0, 0.0, 3.2, -1.1]\nrelu_out = [max(0.0, x) for x in inputs]\nprint(relu_out) # [0.0, 0.0, 3.2, 0.0]'
      }
    ],
    quizQuestions: [
      {
        question: 'Why are non-linear activation functions (like ReLU) required in neural networks?',
        options: [
          'Without non-linearities, stacking multiple linear layers collapses into a single linear equation, unable to learn complex non-linear boundaries',
          'They prevent the GPU from overheating',
          'They convert numbers into strings',
          'They sort the weights in ascending order'
        ],
        correctIndex: 0,
        explanation: 'Any composition of linear functions is just another linear function. Activation functions introduce curvature to fit arbitrary non-linear patterns.'
      },
      {
        question: 'What mathematical principle enables backpropagation to compute layer-by-layer gradients?',
        options: ['The Calculus Chain Rule', 'The Pythagorean Theorem', 'Newton’s Method of Gravity', 'Bayes Rule'],
        correctIndex: 0,
        explanation: 'Backpropagation applies the calculus chain rule backwards from the loss output through intermediate activations to initial weights.'
      },
      {
        question: 'What is the function of the ReLU (Rectified Linear Unit) activation?',
        options: ['f(x) = 1 / (1 + e^-x)', 'f(x) = max(0, x)', 'f(x) = tanh(x)', 'f(x) = x^2'],
        correctIndex: 1,
        explanation: 'ReLU outputs x if x is positive, and 0 if x is zero or negative.'
      },
      {
        question: 'What does optimizer.zero_grad() do in PyTorch?',
        options: [
          'Clears accumulated parameter gradients before computing the new batch backward pass',
          'Resets the model weights to random numbers',
          'Deletes the dataset from RAM',
          'Freezes all layers'
        ],
        correctIndex: 0,
        explanation: 'Because PyTorch accumulates gradients on .backward(), zero_grad() resets all parameter gradient buffers to zero.'
      },
      {
        question: 'Which optimizer adaptively adjusts per-parameter learning rates using running estimates of first and second moments?',
        options: ['Adam', 'Vanilla SGD', 'Bubble Sort', 'Linear Regression'],
        correctIndex: 0,
        explanation: 'Adam (Adaptive Moment Estimation) combines momentum and RMSProp to dynamically scale parameter updates.'
      }
    ],
    miniChallenge: {
      title: 'Manual Perceptron Forward Pass',
      prompt: 'Write a function perceptron_forward(inputs, weights, bias) that returns 1.0 if (sum(x * w) + b) > 0 else 0.0.',
      starterCode: `def perceptron_forward(inputs, weights, bias):
    # Your calculation here
    pass

x = [1.0, 2.0]
w = [0.5, 0.8]
b = -1.0
print(perceptron_forward(x, w, b)) # Expected: 1.0 (2.1 - 1.0 > 0)`,
      solution: `def perceptron_forward(inputs, weights, bias):
    z = sum(i * w for i, w in zip(inputs, weights)) + bias
    return 1.0 if z > 0 else 0.0

x = [1.0, 2.0]
w = [0.5, 0.8]
b = -1.0
print(perceptron_forward(x, w, b))`
    }
  },
  {
    id: 'dl-lesson-2',
    milestoneId: 'ms-nlp',
    order: 2,
    title: '2. Transformers, Attention Mechanism & Large Language Models',
    durationMinutes: 35,
    conceptExplanation: 'Introduced by Vaswani et al. in "Attention Is All You Need" (2017), the Transformer architecture replaced sequential RNNs with Self-Attention. Attention computes dynamic affinity scores between every word and every other word in a sequence (Attention(Q, K, V) = softmax(Q·K^T / sqrt(d_k)) · V). This enables massive parallelization across GPU clusters and forms the foundation of Large Language Models (LLMs) like GPT, Llama, Claude, and Gemini.',
    whyImportant: 'Transformers have revolutionized Natural Language Processing, computer vision (ViT), protein folding (AlphaFold), and code generation. Understanding tokenization, embeddings, and attention is mandatory for AI Engineers.',
    syntax: `# Modern LLM Prompting with @google/genai SDK
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI();
const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: 'Explain the Self-Attention mechanism in 2 sentences.'
});
console.log(response.text);`,
    exampleDescription: 'Calculating token embeddings and matrix dot-product attention scores in Python.',
    codeSnippet: `import numpy as np

# Simulate 3 word embeddings of dimension 4: ["The", "Data", "Scientist"]
embeddings = np.array([
    [1.0, 0.2, 0.8, 0.1],  # "The"
    [0.1, 2.0, 1.5, 0.3],  # "Data"
    [0.2, 1.8, 2.2, 0.9]   # "Scientist"
])

# For demonstration: Queries (Q) and Keys (K)
Q = embeddings
K = embeddings
d_k = embeddings.shape[1] # 4

# 1. Compute raw dot-product similarity scores: Q @ K.T
raw_scores = np.matmul(Q, K.T)

# 2. Scale by sqrt(d_k) to prevent exploding gradients
scaled_scores = raw_scores / np.sqrt(d_k)

# 3. Softmax across columns to obtain attention weight distribution
def softmax(x):
    e_x = np.exp(x - np.max(x, axis=-1, keepdims=True))
    return e_x / e_x.sum(axis=-1, keepdims=True)

attention_weights = softmax(scaled_scores)

print("--- Self-Attention Weight Matrix ---")
print("Words: ['The', 'Data', 'Scientist']")
print(np.round(attention_weights, 3))
print(f"\\nNotice 'Data' and 'Scientist' have high mutual attention: {attention_weights[1, 2]:.3f}")`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 4-8: Matrix of 3 token vectors in a 4-dimensional latent embedding space.',
      'Line 15: Multiplying Queries by transposed Keys (Q @ K.T) to measure pairwise similarity between all tokens.',
      'Line 18: Dividing by square root of key dimension sqrt(d_k) to stabilize gradients in high dimensions.',
      'Line 21-25: Applying row-wise Softmax to convert raw similarity logits into normalized probability weights summing to 1.0.'
    ],
    realWorldExample: 'Modern coding assistants and search engines use transformer embeddings and cross-attention to match natural language queries against millions of documentation pages and code repositories.',
    commonMistakes: [
      {
        mistake: 'Thinking LLMs process raw English characters directly.',
        fix: 'LLMs process numerical "tokens" produced by Byte-Pair Encoding (BPE). One token is approximately 0.75 English words or 4 characters.'
      }
    ],
    practiceExercises: [
      {
        task: 'Calculate the scale factor 1 / sqrt(d_k) for an embedding dimension of d_k = 64.',
        hint: 'sqrt(64) = 8. 1 / 8 = 0.125.',
        solutionSnippet: 'import math\nd_k = 64\nscale = 1.0 / math.sqrt(d_k)\nprint(f"Scale factor: {scale}")'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the formula for Scaled Dot-Product Attention in the original Transformer paper?',
        options: [
          'softmax(Q · K^T / sqrt(d_k)) · V',
          'sigmoid(W · x + b)',
          'ReLU(Q + K + V)',
          'max(0, Q · K)'
        ],
        correctIndex: 0,
        explanation: 'Scaled dot-product attention computes softmax(Q * K^T / sqrt(d_k)) * V, projecting queries against keys to weight values.'
      },
      {
        question: 'Why did Transformers replace Recurrent Neural Networks (RNNs) for language modeling?',
        options: [
          'RNNs must process words sequentially one-by-one, preventing GPU parallelization and suffering from vanishing gradients over long texts',
          'RNNs can only run on iPhones',
          'Transformers do not use any matrix multiplication',
          'RNNs are patented'
        ],
        correctIndex: 0,
        explanation: 'Self-attention processes entire sequences simultaneously in parallel, removing the bottleneck of sequential step-by-step recurrent hidden states.'
      },
      {
        question: 'What is a "Token" in the context of Large Language Models?',
        options: [
          'A chunk of text (word, sub-word, or character sequence) mapped to a unique integer ID in a vocabulary',
          'A physical cryptocurrency coin',
          'A security password for database logins',
          'A hardware chip inside a GPU'
        ],
        correctIndex: 0,
        explanation: 'Tokenizers (like BPE or SentencePiece) break text into subword units, assigning each an integer index in the model’s vocabulary.'
      },
      {
        question: 'What is RAG (Retrieval-Augmented Generation)?',
        options: [
          'Retrieving relevant external documents from a database/vector index and feeding them into the LLM prompt context to ground answers with factual data',
          'Retraining an LLM from scratch with new weights',
          'Generating random text without a prompt',
          'Compressing neural networks onto microcontrollers'
        ],
        correctIndex: 0,
        explanation: 'RAG retrieves authoritative reference facts from an external store and injects them into the prompt, mitigating hallucinations.'
      },
      {
        question: 'What is "Temperature" in LLM text generation?',
        options: [
          'A hyperparameter that scales logits before softmax, where higher values increase diversity/randomness and lower values make output more deterministic',
          'The physical operating temperature of the server room',
          'The number of tokens generated per second',
          'The difficulty level of the prompt'
        ],
        correctIndex: 0,
        explanation: 'Temperature divides logits prior to sampling: near 0 produces greedy/deterministic responses; >0.7 introduces creativity and lexical diversity.'
      }
    ],
    miniChallenge: {
      title: 'Attention Softmax Normalizer',
      prompt: 'Write a function softmax_1d(scores) that takes a list of float logits and returns a list of probabilities summing to 1.0.',
      starterCode: `import math

def softmax_1d(scores):
    # Your softmax implementation
    pass

print(softmax_1d([1.0, 2.0, 3.0])) # Should sum to 1.0`,
      solution: `import math

def softmax_1d(scores):
    max_s = max(scores)
    exp_s = [math.exp(s - max_s) for s in scores]
    total = sum(exp_s)
    return [round(e / total, 4) for e in exp_s]

print(softmax_1d([1.0, 2.0, 3.0]))`
    }
  }
];
